#!/usr/bin/env python
import json
import logging
import pika
import socket
import time
import yaml


backend = None
_prober_name = socket.gethostname()


# TODO(bluecmd): Share this code with dhmond, offer json dump/load functions
class BulkMetric(object):

  def __init__(self, timestamp, hostname, metric, value, prober=None):
    self.hostname = hostname
    self.prober = prober if prober else _prober_name
    self.metric = metric
    self.timestamp = timestamp
    self.value = value


# TODO(bluecmd): Incorporate this into connect, making this the goto-function
# for dhmon programs.
class MqBackend(object):

  def connect(self, mq):
    logging.getLogger('pika').setLevel(logging.ERROR)
    credentials = pika.PlainCredentials(mq['username'], mq['password'])
    self.connection = pika.BlockingConnection(
        pika.ConnectionParameters(mq['host'], credentials=credentials))
    self._queue = []
    self._chunk = []

  def queue(self, metric):
    self._chunk.append({
        'metric': metric.metric,
        'host': metric.hostname,
        'prober': metric.prober,
        'time': metric.timestamp,
        'value': metric.value,
        })
    # Be nice to RabbitMQ, odd problems with larger chunks with wheezy
    if len(self._chunk) >= 100:
      self._queue.append(json.dumps(self._chunk))
      self._chunk = []

  def finish(self):
    result_channel = self.connection.channel()
    for chunk in self._queue:
      result_channel.basic_publish(
          exchange='dhmon:metrics', routing_key='', body=chunk)
    if self._chunk:
      result_channel.basic_publish(
          exchange='dhmon:metrics', routing_key='', body=json.dumps(self._chunk))
    result_channel.close()
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

  for bulkmetric in values:
    backend.queue(bulkmetric)

  backend.finish()
