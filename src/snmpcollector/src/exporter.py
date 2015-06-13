#!/usr/bin/env python2
import BaseHTTPServer
import base64
import logging
import prometheus_client
import threading
import time

import actions
import config
import stage


HTTP_MAIN_PORT = 13200
HTTP_SNMP_PORT = 13201


class Exporter(stage.Stage):

  NUMERIC_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self):
    super(Exporter, self).__init__()
    self.metrics = {}
    self.export_lock = threading.Lock()

  def do_result(self, target, results, stats):
    with self.export_lock:
      self._save(target, results)
    # TODO(bluecmd): Record the stats we are given

  def _save(self, target, results):
    for oid, result in results.iteritems():
      self.export(target, result)

    logging.debug('Export completed for %d metrics for %s',
        len(results), target.host)

  def export(self, target, result):
    metric = self.metrics.get(result.obj, None)
    if not metric:
      if result.data.type == 'COUNTER64' or result.data.type == 'COUNTER':
        metric_type = 'counter'
      elif result.data.type in self.NUMERIC_TYPES:
        metric_type = 'gauge'
      else:
        metric_type = 'blob'
      metric = (result.mib, metric_type, {})
      self.metrics[result.obj] = metric

    _, _, labels = self.metrics[result.obj]
    labels[(
      target.host, result.index, result.interface,
      result.vlan, result.data.type)] = (
          result.data.value, target.timestamp)

  def write_metrics(self, out):
    # We only care about the list structure and its references so a
    # shallow copy is fine here. The data is imutable anyway.
    with self.export_lock:
      metrics_copy = dict(self.metrics)

    for obj, (mib, metrics_type, labels_map) in metrics_copy.iteritems():
      if metrics_type != 'counter' and metrics_type != 'gauge':
        continue
      out.write('# HELP {0} {1}::{0}\n'.format(obj, mib))
      out.write('# TYPE {0} {1}\n'.format(obj, metrics_type))
      for (host, index, interface, vlan, type), (value, timestamp) in (
          labels_map.iteritems()):
        instance = obj
        instance += '{'
        instance += 'device="{0}",'.format(host)
        instance += 'index="{0}",'.format(index)
        instance += 'interface="{0}",'.format(interface)
        instance += 'vlan="{0}",'.format(vlan)
        instance += 'type="{0}"'.format(type)
        instance += '}'
        out.write('{0} {1} {2}\n'.format(
          instance, value, int(timestamp * 1000)))


if __name__ == '__main__':
  stage = Exporter()

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

  stage.listen(actions.AnnotatedResult)
  stage.run()
