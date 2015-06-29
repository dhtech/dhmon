#!/usr/bin/env pypy
import BaseHTTPServer
import SocketServer
import base64
import logging
import prometheus_client
import threading
import time

import actions
import collections
import config
import stage


HTTP_MAIN_PORT = 13100
HTTP_SNMP_PORT = 13101

ROUND_LATENCY = prometheus_client.Summary(
    'snmp_round_latency_seconds',
    'Time it takes to complete one round of SNMP polls')

DEVICE_LATENCY = prometheus_client.Summary(
    'snmp_device_latency_seconds',
    'Time it takes to complete one device SNMP poll', ('device', ))

SUMMARIES_COUNT = prometheus_client.Gauge(
    'snmp_summaries_count', 'Number of in-flight polls')

ERROR_COUNT = prometheus_client.Counter(
    'snmp_error_count', 'Number of errors', ('device',))

TIMEOUT_COUNT = prometheus_client.Counter(
    'snmp_timeout_count', 'Number of timeouts', ('device',))

OID_COUNT = prometheus_client.Gauge(
    'snmp_oid_count', 'Number of OIDs exported', ('device',))

COMPLETED_POLL_COUNT = prometheus_client.Counter(
    'snmp_completed_poll_count', 'Number of completed polls', ('device',))


class Exporter(object):

  NUMERIC_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self):
    super(Exporter, self).__init__()
    self.metrics = {}
    self.prometheus_output = []
    self.copy_lock = threading.Lock()
    self.summaries = {}
    self.seen_targets = collections.defaultdict(set)

  def do_summary(self, run, timestamp, targets):
    self.summaries[timestamp] = targets
    SUMMARIES_COUNT.set(len(self.summaries))

  def do_result(self, run, target, results, stats):
    with self.copy_lock:
      self._save(target, results)

    OID_COUNT.labels(target.host).set(len(results))

    timestamp = target.timestamp
    latency = time.time() - timestamp

    COMPLETED_POLL_COUNT.labels(target.host).inc(1)
    ERROR_COUNT.labels(target.host).inc(stats.errors)
    TIMEOUT_COUNT.labels(target.host).inc(stats.timeouts)
    DEVICE_LATENCY.labels(target.host).observe(latency)

    logging.debug('Export completed for %d metrics for %s',
        len(results), target.host)

    # Try to see if we're done with this round
    self.seen_targets[timestamp].add(target)
    max_targets = self.summaries.get(timestamp, None)
    if max_targets is None:
      return

    if len(self.seen_targets[timestamp]) == max_targets:
      # We're done! Record the latency
      ROUND_LATENCY.observe(latency)
      logging.info('Latency is currently %d', latency)
      del self.summaries[timestamp]
      del self.seen_targets[timestamp]
      SUMMARIES_COUNT.set(len(self.summaries))

  def _save(self, target, results):
    for oid, result in results.iteritems():
      self.export(target, result)

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

    _, saved_metric_type, labels = metric
    if metric_type != saved_metric_type:
      # This happens if we have a collision somewhere ('local' is common)
      # Just ignore this for now.
      return
    labels[(
      target.host, target.layer, result.index, result.data.type)] = (
          result.data.value, target.timestamp, result.labels)

  def run_dump(self):
    while True:
      # Since the label map will be mutated we need to do a deep copy here.
      with self.copy_lock:
        metrics_copy = {}
        for obj, (mib, type, labels) in self.metrics.iteritems():
          metrics_copy[obj] = (mib, type, dict(labels))

      # Assemble the output
      out = []
      for obj, (mib, metrics_type, labels_map) in metrics_copy.iteritems():
        if metrics_type != 'counter' and metrics_type != 'gauge':
          continue
        out.append('# HELP {0} {1}::{0}\n'.format(obj, mib))
        out.append('# TYPE {0} {1}\n'.format(obj, metrics_type))
        for (host, layer, index, type), (value, timestamp, add_labels) in (
            labels_map.iteritems()):

          labels = dict(add_labels)
          labels['device'] = host
          labels['layer'] = layer
          labels['index'] = index
          labels['type'] = type

          label_list = ['{0}="{1}"'.format(k, v) for k, v in labels.iteritems()]
          label_string = ','.join(label_list)
          instance = ''.join([obj, '{', label_string, '}'])

          out.append('{0} {1} {2}\n'.format(
            instance, value, int(timestamp * 1000)))

      self.prometheus_output = out
      time.sleep(10)

  def write_metrics(self, out):
    for row in self.prometheus_output:
      out.write(row)


if __name__ == '__main__':
  exporter = stage.Stage(Exporter())
  # TODO(bluecmd): This seems to be a bit unstable. I never got this to
  # work in daemon mode, which is odd. I need to debug this more.
  # For now, run the exporter like 'python src/exporter.py -d'

  class MetricsHandler(BaseHTTPServer.BaseHTTPRequestHandler):
    def do_GET(self):
      self.send_response(200)
      self.send_header(
        'Content-Type', 'text/plain; version=0.0.4; charset=utf-8')
      self.end_headers()
      exporter.logic.write_metrics(self.wfile)

    def log_message(self, format, *args):
      return


  class ThreadedHTTPServer(
      SocketServer.ThreadingMixIn, BaseHTTPServer.HTTPServer):
    pass

  class PrometheusMetricsServer(threading.Thread):
    def run(self):
      httpd = ThreadedHTTPServer(('', HTTP_SNMP_PORT), MetricsHandler)
      httpd.serve_forever()
  t = PrometheusMetricsServer()
  t.daemon = True
  t.start()

  t = threading.Thread(target=exporter.logic.run_dump)
  t.daemon = True
  t.start()

  prometheus_client.start_http_server(HTTP_MAIN_PORT)

  exporter.listen(actions.AnnotatedResult)
  exporter.listen(actions.Summary)
  exporter.run()
