#!/usr/bin/env python
import collections
import json
import logging
import memcache
import os
import pika
import redis
import socket
import sys
import syslog
import threading
import time
import yaml

# Remove older entries than this (seconds)
REDIS_TIMEOUT = 60 * 10 * 1000

# How often to run the cleanup command
REDIS_CLEAN_INTERVAL = 60 * 2

# Be gentle to slow backends, we use memcache for low-latency stuff
REDIS_HOLDOFF = 200 * 1000
INFLUXDB_HOLDOFF = 14 * 1000

# Memcache expiry setting on entries (seconds)
MEMCACHE_TTL = 3600


# This dict holds the last time a metric was updated, used for holdoff
redis_metric_time = {}
influxdb_metric_time = {}

memcache_metrics = ['ipplan-pinger.us', 'snmp.metrics.saved']
holdoff_whitelist = ['snmp.metrics.saved']


class Error(Exception):
  """Base exception for this module."""


class AccessDeniedError(Error):
  """User is not allowed to access this metric."""


class MalformedMetricError(Error):
  """Metrics passed in queue is malformed."""


# TODO(bluecmd): Rewrite this to use the POST API
class InfluxBackend(object):

  def connect(self, host):
    self.address = (host, 4444)
    self.socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    self._queue = collections.defaultdict(list)

  def queue(self, metric):
    # Ignore non-integer metrics for InfluxDB
    try:
      if str(int(metric['value'])) != str(metric['value']):
        return
    except ValueError:
      return
    self._queue[metric['metric']].append(metric)

  def finish(self):
    for metric_name, metrics in self._queue.iteritems():
      data = {
        'name': metric_name,
        'columns': ['time', 'host', 'prober', 'value'],
        'points': []
      }
      for i, metric in enumerate(metrics):
        # Split the packet ~10 metrics per packet. InfluxDB seems to have
        # trouble with fragmented packets.
        if (i % 10 == 0) and data['points']:
          self.socket.sendto(json.dumps([data]), self.address)
          data['points'] = []
        # InfluxDB requires the time to be float (and in seconds for UDP)
        data['points'].append((
            int(int(metric['time']) * 1000.0) / 1000.0,
            metric['host'], metric['prober'], int(metric['value'])))

      # Send the rest
      if data['points']:
        self.socket.sendto(json.dumps([data]), self.address)
    self._queue = collections.defaultdict(list)


def connect(mq, queue):
  credentials = pika.PlainCredentials(mq['username'], mq['password'])
  connection = pika.BlockingConnection(
      pika.ConnectionParameters(mq['host'], credentials=credentials))
  channel = connection.channel()
  channel.exchange_declare(exchange='dhmon:metrics', type='fanout')

  result = channel.queue_declare(exclusive=True, queue=queue)
  channel.queue_bind(exchange='dhmon:metrics', queue=queue)
  return channel


# TODO(bluecmd): Share stuff like this with dhmon lib.
def parse_metrics(data):
  """Try parsing a metric."""
  try:
    return json.loads(data)
  except ValueError, e:
    raise MalformedMetricError('JSON error: ' + e.message)
  return None


def check_acl(metrics, queue, user):
  """Make sure that the given user is allowed to post metrics to a backend."""
  if not user:
    raise AccessDeniedError('No user supplied')
  if user == 'dhmon':
    return
  for metric in metrics:
    if user == 'purchase' and metric['metric'].startswith('purchase'):
      continue
    raise AccessDeniedError('User is denied')


def is_holdoff(metric_time, metric, holdoff):
  if metric['metric'] in holdoff_whitelist:
    return False

  timestamp = int(metric['time']) * 1000
  metric_id = '%s.%s.%s' % (
      metric['metric'], metric['host'], metric['prober'])

  # Apply rate limit for redis, it's not super quick
  last_stamp = metric_time.get(metric_id, 0)
  if last_stamp > timestamp - holdoff:
    return True

  metric_time[metric_id] = timestamp
  return False


def redis_consume(backend, metrics):
  for metric in metrics:
    if is_holdoff(redis_metric_time, metric, REDIS_HOLDOFF):
      continue

    # Ignore SNMP elapsed metrics
    # TODO(bluecmd): Make this configurable
    if metric['metric'].startswith('snmp.elapsed'):
      continue

    timestamp = int(metric['time']) * 1000

    key = metric['metric']
    metric_struct = {
        'host': metric['host'],
        'prober': metric['prober'],
        'value': metric['value']
    }
    if metric['metric'].startswith('snmp.1'):
      # for SNMP do a special thing for redis where we set last oid as a special attribute
      parts = key.split('.')
      metric_struct['lastoid'] = parts[-1]
      key = '.'.join(key.split('.')[:-1])
      
    backend.zadd('metric:' + key, timestamp, json.dumps(metric_struct))
    backend.zadd('host:' + metric['host'], timestamp, json.dumps({
        'metric': metric['metric'],
        'prober': metric['prober'],
        'value': metric['value']
    }))


def redis_clean(redis_server):
  backend = redis.StrictRedis(redis_server)
  while True:
    timestamp = int(time.time() * 1000)
    for key in backend.keys():
      if not key.startswith('metric:') and not key.startswith('host:'):
        continue
      backend.zremrangebyscore(key, 0, timestamp - REDIS_TIMEOUT)
    elapsed = int(time.time() * 1000) - timestamp
    syslog.syslog(syslog.LOG_INFO, 'Redis cleaner is done, it took %d ms' % (
        elapsed))
    time.sleep(REDIS_CLEAN_INTERVAL)


def influxdb_consume(backend, metrics):
  for metric in metrics:
    if is_holdoff(influxdb_metric_time, metric, INFLUXDB_HOLDOFF):
      continue
    backend.queue(metric)
  backend.finish()


def memcache_consume(backend, metrics):
  for metric in metrics:
    # TODO(bluecmd): Replace with topics instead
    for part in memcache_metrics:
      if part in metric['metric']:
        break
    else:
       continue
    key = 'last:%s.%s' % (metric['host'], metric['metric'])
    backend.set(str(key), json.dumps(metric), time=MEMCACHE_TTL)


def consume(mq, backend, queue, consumer):
  channel = connect(mq, queue)

  def callback(channel, method, properties, body):
    # TODO(bluecmd): Maybe we want to share this among the three threads,
    # but that's complex. Let's do it one for every consumer for now.
    try:
      metrics = parse_metrics(body)
      check_acl(metrics, queue, properties.user_id)
      logging.debug('Consumed %d metrics for %s', len(metrics), backend)
      consumer(backend, metrics)
    except AccessDeniedError, e:
      syslog.syslog(
          syslog.LOG_ERR, 'Access to metric denied in %s for %s: %s' % (
              queue, properties.user_id, e.message))
    except MalformedMetricError, e:
      syslog.syslog(
          syslog.LOG_ERR, 'Failed parsing metric for %s: %s' % (
              queue, e.message))
    except Exception, e:
      syslog.syslog(
          syslog.LOG_ERR, 'Unable to send metric to %s: %s' % (
              queue, e.message))

  # TODO(bluecmd): Make this error resilient and reconnect on MQ failure
  channel.basic_consume(callback, queue=queue, no_ack=True)
  channel.start_consuming()


if __name__ == '__main__':

  config = yaml.safe_load(file('/etc/dhmon.yaml'))
  mq = config.get('mq', None)
  if not mq:
    raise KeyError('No "mq" key in config file /etc/dhmon.yaml')

  metric_server = config.get('metric-server', None)
  if not metric_server:
    raise KeyError('No "metric-server" key in config file /etc/dhmon.yaml')

  redis_server = config.get('redis-server', None)
  if not redis_server:
    raise KeyError('No "redis-server" key in config file /etc/dhmon.yaml')

  memcache_server = config.get('memcache-server', None)
  if not memcache_server:
    raise KeyError('No "memcache-server" key in config file /etc/dhmon.yaml')

  os.close(0)
  os.close(1)
  os.close(2)

  if not os.fork():
    backend = InfluxBackend()
    backend.connect(metric_server)
    consume(mq, backend, 'dhmon:metrics:influxdb', influxdb_consume)
  elif not os.fork():
    redis_clean_thread = threading.Thread(
        target=redis_clean, args=(redis_server, ))
    redis_clean_thread.daemon = True
    redis_clean_thread.start()
    backend = redis.StrictRedis(redis_server)
    consume(mq, backend, 'dhmon:metrics:redis', redis_consume)
  elif not os.fork():
    backend = memcache.Client(['%s:11211' % memcache_server])
    consume(mq, backend, 'dhmon:metrics:memcache', memcache_consume)
