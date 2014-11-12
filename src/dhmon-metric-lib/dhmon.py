#!/usr/bin/env python
import collections
import json
import socket
import sys
import time


backend = None


class BulkMetric(object):

  def __init__(self, timestamp, hostname, metric, value):
    rev_hostname = '.'.join(reversed(hostname.split('.')))
    self.path = 'dh.%s.%s' % (rev_hostname, metric)
    self.hostname = hostname
    self.metric = metric
    self.timestamp = timestamp
    self.value = value


class CarbonBackend(object):

  def connect(self):
    carbon_address = ('dhmon-devel.tech.dreamhack.se', 2003)
    try:
      self.carbon_socket = socket.socket()
      self.carbon_socket.connect(carbon_address)
    except Exception as e:
      return False
    return True

  def queue(self, metric):
    carbon_msg = '%s %s %s\n' % (metric.path, metric.value, metric.timestamp)
    self.carbon_socket.send(carbon_msg)

  def finish(self):
    pass


class InfluxBackend(object):

  def connect(self):
    self.address = ('dhmon-devel.tech.dreamhack.se', 4444)
    try:
      self.socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    except Exception as e:
      return False
    self._queue = collections.defaultdict(list)
    return True

  def queue(self, metric):
    self._queue[metric.metric].append(metric)

  def finish(self):
    output = []
    for metric_name, metrics in self._queue.iteritems():
      data = {
        'name': metric_name,
        'columns': ['time', 'host', 'value'],
        'points': []
      }
      for metric in metrics:
        data['points'].append((metric.timestamp, metric.hostname, metric.value))
      output.append(data) 
    self.socket.sendto(json.dumps(output), self.address)
    self._queue = collections.defaultdict(list)
    pass


def connect(backend_cls=InfluxBackend):
  global backend
  backend = backend_cls()
  return backend.connect()


def metric(metric, value, hostname=None, timestamp=None):
  if timestamp is None:
      timestamp = int(time.time())
  if hostname is None:
      hostname = socket.getfqdn()

  return metricbulk([
    BulkMetric(timestamp=timestamp, hostname=hostname,
      metric=metric, value=value)])


def metricbulk(values):
  if backend is None:
    connect()

  ops = []
  for bulkmetric in values:
    backend.queue(bulkmetric)

  backend.finish()

  return True
