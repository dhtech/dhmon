#!/usr/bin/env python
import collections
import json
import redis
import socket
import sys
import time
import yaml


# Remove older entries than this (seconds)
CACHE_TIMEOUT = 3600 * 1000


backend = None
cache = None


class BulkMetric(object):

  def __init__(self, timestamp, hostname, metric, value):
    rev_hostname = '.'.join(reversed(hostname.split('.')))
    self.path = 'dh.%s.%s' % (rev_hostname, metric)
    self.hostname = hostname
    self.metric = metric
    # Truncate on ms to make it more backend agnostic
    self.timestamp = int(timestamp * 1000)
    self.value = value
    self.json = json.dumps({
        'host': hostname,
        'metric': metric,
        'timestamp': timestamp,
        'value': value,
    })


class CarbonBackend(object):

  def connect(self, host):
    carbon_address = (host, 2003)
    self.carbon_socket = socket.socket()
    self.carbon_socket.connect(carbon_address)

  def queue(self, metric):
    carbon_msg = '%s %s %s\n' % (metric.path, metric.value, metric.timestamp)
    self.carbon_socket.send(carbon_msg)

  def finish(self):
    pass


class InfluxBackend(object):

  def connect(self, host):
    self.address = (host, 4444)
    self.socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    self._queue = collections.defaultdict(list)

  def queue(self, metric):
    self._queue[metric.metric].append(metric)

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
            (metric.timestamp / 1000.0, metric.hostname, metric.value))

      # Send the rest
      if data['points']:
        self.socket.sendto(json.dumps([data]), self.address)
    self._queue = collections.defaultdict(list)


def update_cache(metric):
  for key in [metric.path, metric.hostname, metric.metric]:
    cache.zadd(key, metric.timestamp, metric.json)
    cache.zremrangebyscore(key, 0, metric.timestamp - CACHE_TIMEOUT)


def connect(backend_cls=InfluxBackend):
  global backend
  global cache
  backend = backend_cls()

  config = yaml.safe_load(file('/etc/dhmon.yaml'))
  metric_host = config.get('metric-server', None)
  redis_host = config.get('redis-server', None)
  if not metric_host:
    raise KeyError('No "metric-server" key in config file /etc/dhmon.yaml')
  if not redis_host:
    raise KeyError('No "redis-server" key in config file /etc/dhmon.yaml')

  cache = redis.StrictRedis(host=redis_host)
  backend.connect(metric_host)


def metric(metric, value, hostname=None, timestamp=None):
  if timestamp is None:
      timestamp = int(time.time())
  if hostname is None:
      hostname = socket.getfqdn()

  metricbulk([BulkMetric(timestamp=timestamp, hostname=hostname,
                         metric=metric, value=value)])


def metricbulk(values):
  if backend is None:
    connect()

  ops = []
  for bulkmetric in values:
    backend.queue(bulkmetric)
    update_cache(bulkmetric)

  backend.finish()
