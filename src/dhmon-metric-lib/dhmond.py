#!/usr/bin/env python
import collections
import json
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
REDIS_TIMEOUT = 3600 * 1000

# How often to run the cleanup command
REDIS_CLEAN_INTERVAL = 10*60

# Memcache expiry setting on entries (seconds)
MEMCACHE_TTL = 3600


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
        'columns': ['time', 'host', 'value'],
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
            metric['host'], int(metric['value'])))

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


def parse_metrics(data):
  try:
    return json.loads(data)
  except ValueError, e:
    syslog.syslog(
        syslog.LOG_ERR, 'Unable to parse JSON metrics: %s' % e.message)
  return None


def redis_consume(backend, body):
  metrics = parse_metrics(body)
  try:
    for metric in metrics:
      combo = '%s.%s' % (metric['host'], metric['metric'])
      timestamp = int(metric['time']) * 1000
      backend.zadd(combo, timestamp, json.dumps(metric))
      backend.zadd(metric['metric'], timestamp, json.dumps(metric))
      backend.zadd(metric['host'], timestamp, json.dumps(metric))
  except Exception, e:
    syslog.syslog(
        syslog.LOG_ERR, 'Unable to send metric to Redis: %s' % e.message)


def redis_clean():
  backend = redis.StrictRedis(redis_server)
  while True:
    timestamp = int(time.time() * 1000)
    for key in backend.keys():
      backend.zremrangebyscore(key, 0, timestamp - REDIS_TIMEOUT)
    elapsed = int(time.time() * 1000) - timestamp
    syslog.syslog(syslog.LOG_INFO, 'Redis cleaner is done, it took %d ms' % (
        elapsed))
    time.sleep(REDIS_CLEAN_INTERVAL)


def influxdb_consume(backend, body):
  metrics = parse_metrics(body)
  try:
    for metric in metrics:
      backend.queue(metric)
    backend.finish()
  except Exception, e:
    syslog.syslog(
        syslog.LOG_ERR, 'Unable to send metric to InfluxDB: %s' % e.message)


def memcache_consume(backend, body):
  metrics = parse_metrics(body)
  try:
    for metric in metrics:
      combo = '%s.%s' % (metric['host'], metric['metric'])
      backend.set(str(combo), json.dumps(metric), time=MEMCACHE_TTL)
  except Exception, e:
    syslog.syslog(
        syslog.LOG_ERR, 'Unable to send metric to Memcache: %s' % e.message)


def consume(mq, backend, queue, consumer):
  channel = connect(mq, queue)

  def callback(channel, method, properties, body):
    consumer(backend, body)

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
    redis_clean_thread = threading.Thread(target=redis_clean)
    redis_clean_thread.daemon = True
    redis_clean_thread.start()
    backend = redis.StrictRedis(redis_server)
    consume(mq, backend, 'dhmon:metrics:redis', redis_consume)
  elif not os.fork():
    backend = memcache.Client(['%s:11211' % memcache_server])
    consume(mq, backend, 'dhmon:metrics:memcache', memcache_consume)
