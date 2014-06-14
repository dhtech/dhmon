#!/usr/bin/env python
import cassandra.cluster
import collections
import socket
import sys
import time


BulkMetric = collections.namedtuple('BulkMetric', [
  'timestamp', 'hostname', 'metric', 'value'])

cluster = None
session = None
prepared_insert = None

def connect():
  global cluster
  global session
  global prepared_insert
  cluster = cassandra.cluster.Cluster(['metricstore.event.dreamhack.se'])
  session = cluster.connect('metric')
  sql = ('UPDATE metric SET data = data + ? WHERE tenant = \'\' AND '
        'rollup = ? AND period = ? AND path = ? AND time = ?')
  prepared_insert = session.prepare(sql)


def metric(metric, value, hostname=None, timestamp=None):
  if timestamp is None:
      timestamp = int(time.time())
  if hostname is None:
      hostname = socket.getfqdn()

  return metricbulk([
    BulkMetric(timestamp=timestamp, hostname=hostname,
      metric=metric, value=value)])


def metricbulk(values):
  if cluster is None:
    connect()

  ops = []
  for bulkmetric in values:
    rev_hostname = '.'.join(reversed(bulkmetric.hostname.split('.')))
    path = 'dh.%s.%s' % (rev_hostname, bulkmetric.metric)
    ops.append(session.execute_async(prepared_insert, ([int(bulkmetric.value)],
      30, 86400, path, int(bulkmetric.timestamp))))

  for op in ops:
    op.result()

  return True
