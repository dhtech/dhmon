#!/usr/bin/env python
import collections
import socket
import sys
import time


backend = None


class BulkMetric(object):

  def __init__(self, timestamp, hostname, metric, value):
    rev_hostname = '.'.join(reversed(hostname.split('.')))
    self.path = 'dh.%s.%s' % (rev_hostname, metric)
    self.timestamp = timestamp
    self.value = value


class CarbonBackend(object):

  def connect(self):
    carbon_address = ('metricstore.event.dreamhack.se', 2003)
    try:
      self.carbon_socket = socket.socket()
      self.carbon_socket.connect(carbon_address)
    except Exception as e:
      return False
    return True

  def queue(self, timestamp, path, value):
    carbon_msg = '%s %s %s\n' % (path, value, timestamp)
    self.carbon_socket.send(carbon_msg)

  def finish(self):
    pass


def connect(backend_cls=CarbonBackend):
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
    rollup = 30
    period = 86400
    timestamp = (int(bulkmetric.timestamp) / rollup) * rollup
    backend.queue(timestamp, bulkmetric.path, int(bulkmetric.value))

  backend.finish()

  return True
