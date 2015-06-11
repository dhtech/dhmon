#!/usr/bin/env python2
import base64
import logging
import prometheus_client
import time

import config
import stage


HTTP_PORT = 13100

OID_ifDescr = '.1.3.6.1.2.1.2.2.1.2.'


class SaveAction(stage.Action):
  """Save a data set."""
  def __init__(self, target, results):
    self.target = target
    self.results = results

  def do(self, stage):
    return stage.do_save(self.target, self.results)


class ResultSaver(stage.Stage):

  NUMERIC_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self):
    super(ResultSaver, self).__init__('result_saver', task_queue='worker')
    self.save_time = prometheus_client.Summary(
      'result_saver_processing_seconds', 'Time spent in do_save')
    self.mibresolver = None
    self.mibcache = {}
    self.metrics = {}

  def startup(self):
    import mibresolver
    self.mibresolver = mibresolver
    super(ResultSaver, self).startup()

  def do_save(self, target, results):
    with self.save_time.time():
      self._save(target, results)

  def _save(self, target, results):
    if_oids = config.get('saver', 'if-oids')
    timestamp = int(target.timestamp)

    saved = 0

    # This is a hack to add human interfaces to metrics
    # Do a pre-scan to see if we have an updated ifDescr table
    # Basically add a label to the metric if we have an interface that matches
    # the index.
    interfaces_map = {}
    for oid, result in results.iteritems():
      # Check for ifDescr
      if oid.startswith(OID_ifDescr):
        interfaces_map[oid[len(OID_ifDescr):]] = result.value

    for oid, result in results.iteritems():
      # Record some stats on how long time it took to get this metric
      elapsed = (time.time() - target.timestamp) * 1000 * 1000

      name = self.mibcache.get(oid, None)
      if name is None:
        name = self.mibresolver.resolve(oid)
        self.mibcache[oid] = name

      if name is None:
        logging.warning('Failed to look up OID %s, ignoring', oid)
        continue

      mib, part = name.split('::', 1)
      obj, index = part.split('.', 1) if '.' in part else (part, None)

      # Add linterfaces label if we suspect this to be an interface metric
      interface = None
      for if_oid in if_oids:
        if oid.startswith(if_oid + '.') or oid == if_oid:
          interface = interfaces_map.get(index, None)
          break

      value = result.value
      if result.type in self.NUMERIC_TYPES:
        self.export_numeric(target, result, mib, obj, index, interface)
      else:
        self.export_blob(target, result, mib, obj, index, interface)
      saved += 1

    # Save collection stats
    logging.debug('Save completed for %d metrics for %s', saved, target.host)

  def export_numeric(self, target, result, mib, obj, index, interface):
    metric = self.metrics.get(obj, None)
    if not metric:
      if result.type == 'COUNTER64' or result.type == 'COUNTER':
        metric = prometheus_client.Counter(obj, '%s::%s' % (mib, obj),
            ['device', 'index', 'interface', 'type'])
      else:
        metric = prometheus_client.Gauge(obj, '%s::%s' % (mib, obj),
            ['device', 'index', 'interface', 'type'])
      self.metrics[obj] = metric

    instance = metric.labels(target.host, index, interface, result.type)
    # HACK: metrics only support delta increments currently
    with instance._lock:
      instance._value = int(result.value)

  def export_blob(self, target, result, mib, obj, index, interface):
    # TODO
    pass

if __name__ == '__main__':
  prometheus_client.start_http_server(HTTP_PORT)
  stage = ResultSaver()
  stage.run()
