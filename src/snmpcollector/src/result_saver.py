#!/usr/bin/env python2
import BaseHTTPServer
import base64
import logging
import prometheus_client
import threading
import time

import config
import stage


HTTP_MAIN_PORT = 13100
HTTP_SNMP_PORT = 13101

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
    self.export_lock = threading.Lock()

  def startup(self):
    import mibresolver
    self.mibresolver = mibresolver
    super(ResultSaver, self).startup()

  def do_save(self, target, results):
    with self.export_lock:
      with self.save_time.time():
        self._save(target, results)

  def _save(self, target, results):
    if_oids = config.get('saver', 'if-oids')

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
      self.export(target, result, mib, obj, index, interface)
      saved += 1

    # Save collection stats
    logging.debug('Save completed for %d metrics for %s', saved, target.host)

  def export(self, target, result, mib, obj, index, interface):
    metric = self.metrics.get(obj, None)
    if not metric:
      if result.type == 'COUNTER64' or result.type == 'COUNTER':
        metric_type = 'counter'
      elif result.type in self.NUMERIC_TYPES:
        metric_type = 'gauge'
      else:
        metric_type = 'blob'
      metric = (mib, metric_type, {})
      self.metrics[obj] = metric

    _, _, labels = self.metrics[obj]
    labels[(target.host, index, interface, result.type)] = (
        result.value, target.timestamp)

  def write_metrics(self, out):
    with self.export_lock:
      for obj, (mib, metrics_type, labels_map) in self.metrics.iteritems():
        if metrics_type != 'counter' and metrics_type != 'gauge':
          continue
        out.write('# HELP {0} {1}::{0}\n'.format(obj, mib))
        out.write('# TYPE {0} {1}\n'.format(obj, metrics_type))
        for (host, index, interface, type), (value, timestamp) in (
            labels_map.iteritems()):
          instance = obj
          instance += '{'
          instance += 'device="{0}",'.format(host)
          instance += 'index="{0}",'.format(index)
          instance += 'interface="{0}",'.format(interface)
          instance += 'type="{0}"'.format(type)
          instance += '}'
          out.write('{0} {1} {2}\n'.format(
            instance, value, int(timestamp * 1000)))


if __name__ == '__main__':
  stage = ResultSaver()

  class MetricsHandler(BaseHTTPServer.BaseHTTPRequestHandler):
    def do_GET(self):
      self.send_response(200)
      self.send_header(
        'Content-Type', 'text/plain; version=0.0.4; charset=utf-8')
      self.end_headers()
      stage.write_metrics(self.wfile)

    def log_message(self, format, *args):
      return

  class PrometheusMetricsServer(threading.Thread):
    def run(self):
      httpd = BaseHTTPServer.HTTPServer(('', HTTP_SNMP_PORT), MetricsHandler)
      httpd.serve_forever()
  t = PrometheusMetricsServer()
  t.daemon = True
  t.start()

  prometheus_client.start_http_server(HTTP_MAIN_PORT)

  stage.run()
