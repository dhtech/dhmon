#!/usr/bin/env python
import collections
import json
import os
import pika
import redis
import socket
import sys
import syslog
import time
import yaml


# Remove older entries than this (seconds)
CACHE_TIMEOUT = 3600 * 1000


# TODO(bluecmd): Rewrite this to use the POST API
class InfluxBackend(object):

  def connect(self, host):
    self.address = (host, 4444)
    self.socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    self._queue = collections.defaultdict(list)

  def queue(self, metric):
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
        data['points'].append(
            (int(metric['time'] * 1000.0) / 1000.0,
            metric['host'], metric['value']))

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
      for key in [metric['host'], metric['metric']]:
        backend.zadd(key, metric['time'], json.dumps(metric))
        backend.zremrangebyscore(key, 0, metric['time'] - CACHE_TIMEOUT)
  except Exception, e:
    syslog.syslog(
        syslog.LOG_ERR, 'Unable to send metric to Redis: %s' % e.message)


def influxdb_consume(backend, body):
  metrics = parse_metrics(body)
  try:
    for metric in metrics:
      backend.queue(metric)
    backend.finish()
  except Exception, e:
    syslog.syslog(
        syslog.LOG_ERR, 'Unable to send metric to InfluxDB: %s' % e.message)


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
    raise KeyError('No "metric_server" key in config file /etc/dhmon.yaml')

  redis_server = config.get('redis-server', None)
  if not redis_server:
    raise KeyError('No "redis_server" key in config file /etc/dhmon.yaml')

  os.close(0)
  os.close(1)
  os.close(2)

  if not os.fork():
    backend = InfluxBackend()
    backend.connect(metric_server)
    consume(mq, backend, 'dhmon:metrics:influxdb', influxdb_consume)
  elif not os.fork():
    backend = redis.StrictRedis(redis_server)
    consume(mq, backend, 'dhmon:metrics:redis', redis_consume)
