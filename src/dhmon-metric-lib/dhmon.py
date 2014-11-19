#!/usr/bin/env python
import json
import pika
import socket
import time
import yaml


backend = None


class BulkMetric(object):

  def __init__(self, timestamp, hostname, metric, value):
    self.hostname = hostname
    self.metric = metric
    self.timestamp = timestamp
    self.value = value


class MqBackend(object):

  def connect(self, host):
    self.connection = pika.BlockingConnection(pika.ConnectionParameters(host))
    self.result_channel = self.connection.channel()
    self._queue = []

  def queue(self, metric):
    self._queue.append({
        'metric': metric.metric,
        'host': metric.hostname,
        'time': metric.timestamp,
        'value': metric.value,
        })

  def finish(self):
    self.result_channel.basic_publish(
        exchange='dhmon:metrics', routing_key='', body=json.dumps(self._queue))
    self._queue = []


def connect(backend_cls=MqBackend):
  global backend
  backend = backend_cls()

  config = yaml.safe_load(file('/etc/dhmon.yaml'))
  mq = config.get('mq', None)
  if not mq:
    raise KeyError('No "mq" key in config file /etc/dhmon.yaml')

  backend.connect(mq)


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

  backend.finish()
