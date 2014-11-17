#!/usr/bin/env python2
import logging
import time

import stage


class SaveAction(stage.Action):
  """Save a data set."""
  def __init__(self, target, results):
    self.target = target
    self.results = results

  def do(self, stage):
    return stage.do_save(self.target, self.results)


class ResultSaver(stage.Stage):

  INTEGER_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self):
    super(ResultSaver, self).__init__('result_saver', task_queue='processed')

  def startup(self):
    import dhmon
    self.dhmon = dhmon
    self.dhmon.connect()
    super(ResultSaver, self).startup()

  def do_save(self, target, results):
    timestamp = int(target.timestamp)
    metrics = []

    saved = 0
    ignored = 0
    for oid, result in results.iteritems():
      # Record some stats on how long time it took to get this metric
      elapsed = (time.time() - target.timestamp) * 1000 * 1000
      bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
          hostname=target.host, metric='snmp.elapsed.us%s' % oid,
          value=elapsed)
      metrics.append(bulkmetric)

      if result.type in self.INTEGER_TYPES:
        bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
            hostname=target.host, metric='snmp%s' % oid,
            value=result.value)
        metrics.append(bulkmetric)
        saved += 1
      else:
        ignored += 1
        # TODO(bluecmd): Save this value to redis instead of ignoring it

    # Save collection stats
    bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
        hostname=target.host, metric='snmp.metrics.saved',
        value=saved)
    metrics.append(bulkmetric)
    bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
        hostname=target.host, metric='snmp.metrics.ignored',
        value=ignored)
    metrics.append(bulkmetric)

    try:
      self.dhmon.metricbulk(metrics)
    except IOError:
      logging.error('Failed to save metrics, ignoring this sample')

    logging.info('Save completed for %d metrics (ignored %d) for %s',
        saved, ignored, target.host)


if __name__ == '__main__':
  stage = ResultSaver()
  stage.run()
