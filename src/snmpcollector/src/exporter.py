#!/usr/bin/env python2
import BaseHTTPServer
import base64
import logging
import prometheus_client
import threading
import time

import actions
import collections
import config
import copy
import stage


HTTP_MAIN_PORT = 13100
HTTP_SNMP_PORT = 13101

ROUND_LATENCY = prometheus_client.Summary(
    'snmp_round_latency_seconds',
    'Time it takes to complete one round of SNMP polls')

SUMMARIES_COUNT = prometheus_client.Gauge(
    'snmp_summaries_count', 'Number of in-flight polls')

ERROR_COUNT = prometheus_client.Counter(
    'snmp_error_count', 'Number of errors', ('device',))

TIMEOUT_COUNT = prometheus_client.Counter(
    'snmp_timeout_count', 'Number of timeouts', ('device',))

OID_COUNT = prometheus_client.Gauge(
    'snmp_oid_count', 'Number of OIDs exported', ('device',))


class Exporter(stage.Stage):

  NUMERIC_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self):
    super(Exporter, self).__init__()
    self.metrics = {}
    self.export_lock = threading.Lock()
    self.summaries = {}
    self.seen_targets = collections.defaultdict(set)

  def do_summary(self, timestamp, targets):
    self.summaries[timestamp] = targets
    SUMMARIES_COUNT.set(len(self.summaries))

  def do_result(self, target, results, stats):
    with self.export_lock:
      self._save(target, results)

    ERROR_COUNT.labels(target.host).inc(stats.errors)
    TIMEOUT_COUNT.labels(target.host).inc(stats.timeouts)

    # Try to see if we're done with this round
    timestamp = target.timestamp
    self.seen_targets[timestamp].add(target)
    max_targets = self.summaries.get(timestamp, None)
    if max_targets is None:
      return

    if len(self.seen_targets[timestamp]) == max_targets:
      # We're done! Record the latency
      latency = time.time() - timestamp
      ROUND_LATENCY.observe(latency)
      logging.info('Latency is currently %d', latency)
      del self.summaries[timestamp]
      del self.seen_targets[timestamp]
      SUMMARIES_COUNT.set(len(self.summaries))

  def _save(self, target, results):
    for oid, result in results.iteritems():
      self.export(target, result)

    OID_COUNT.labels(target.host).set(len(results))
    logging.debug('Export completed for %d metrics for %s',
        len(results), target.host)

  def export(self, target, result):
    metric = self.metrics.get(result.obj, None)
    if result.data.type == 'COUNTER64' or result.data.type == 'COUNTER':
      metric_type = 'counter'
    elif result.data.type in self.NUMERIC_TYPES:
      metric_type = 'gauge'
    else:
      metric_type = 'blob'

    if not metric:
      metric = (result.mib, metric_type, {})
      self.metrics[result.obj] = metric

    _, saved_metric_type, labels = self.metrics[result.obj]
    if metric_type != saved_metric_type:
      # This happens if we have a collision somewhere ('local' is common)
      # Just ignore this for now.
      return
    labels[(
      target.host, result.index, result.interface,
      result.vlan, result.data.type)] = (
          result.data.value, target.timestamp)

  def write_metrics(self, out):
    # Since the label map will be mutated we need to do a deep copy here.
    with self.export_lock:
      metrics_copy = copy.deepcopy(self.metrics)

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
  stage.listen(actions.Summary)
  stage.run()
