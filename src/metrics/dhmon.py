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


class PathTree(object):

  def __init__(self):
    self.children = collections.defaultdict(PathTree)

  def update(self, path):
    if not path:
      return
    self.children[path[0]].update(path[1:])

  def contains(self, path):
    if not path:
      return True
    if path[0] not in self.children:
      return False
    return self.children[path[0]].contains(path[1:])


class CassandraBackend(object):

  def connect(self):
    import cassandra.cluster
    self.cluster = cassandra.cluster.Cluster(['metricstore.event.dreamhack.se'])
    self.session = self.cluster.connect('metric')
    sql = ('UPDATE metric SET data = data + ? WHERE tenant = \'\' AND '
          'rollup = ? AND period = ? AND path = ? AND time = ?')
    self.prepared_insert = self.session.prepare(sql)
    self.ops = []
    self.rollup = 30
    self.period = 86400
    return True

  def queue(self, timestamp, path, value):
    self.ops.append(self.session.execute_async(
      self.prepared_insert, ([value], self.rollup, self.period,
        path, timestamp)))

  def finish(self):
    for op in self.ops:
      op.result()
    self.ops = []


class CassandraEsBackend(CassandraBackend):

  def connect(self):
    import elasticsearch
    self.es = elasticsearch.Elasticsearch('metricstore.event.dreamhack.se')
    self.inserted_paths = 0
    self.path_cache = PathTree()
    self.path_tree = PathTree()
    return super(CassandraEsBackend, self).connect()

  def _add_path_tree_to_es(self, prefix, path):
    if prefix:
      leaf = not bool(path.children)
      metric_path = '.'.join(prefix)
      self.es.index(index='cynaite_paths', doc_type='path', id=metric_path,
          body={'path': metric_path, 'tenant': '', 'leaf': leaf,
            'depth': len(prefix)})
      self.path_cache.update(prefix)
      self.inserted_paths += 1

    for k,v in path.children.iteritems():
      self._add_path_tree_to_es(prefix + [k], v)

  def queue(self, timestamp, path, value):
    super(CassandraEsBackend, self).queue(timestamp, path, value)
    if not self.path_cache.contains(path):
      self.path_tree.update(path.split('.'))

  def finish(self):
    super(CassandraEsBackend, self).finish()
    self._add_path_tree_to_es([], self.path_tree)
    self.path_tree = PathTree()


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


def connect(backend_cls=CassandraEsBackend):
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
