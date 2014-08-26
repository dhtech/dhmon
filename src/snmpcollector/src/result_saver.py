import logging
import multiprocessing as mp
import stage
import time


class ResultSaver(stage.Stage):

  INTEGER_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self, task_queue, workers):
    logging.info('Starting result savers')
    super(ResultSaver, self).__init__(task_queue, 'result_saver',
        workers=workers)

  def startup(self):
    import dhmon
    self.dhmon = dhmon
    self.dhmon.connect()
    logging.info('Started result saver thread %d', self.pid)

  def measure(self, token):
    token.stop()
    self.dhmon.metric(metric='snmpcollector.runtime.us',
        value=token.elapsed * 1000 * 1000)

  def do(self, task):
    timestamp = int(task.target.timestamp)
    metrics = []

    saved = 0
    ignored = 0
    for oid, result in task.results.iteritems():
      # Record some stats on how long time it took to get this metric
      elapsed = (time.time() - task.target.timestamp) * 1000 * 1000
      bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
          hostname=task.target.host, metric='snmp.elapsed.us%s' % oid,
          value=elapsed)
      metrics.append(bulkmetric)

      if result.type in self.INTEGER_TYPES:
        bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
            hostname=task.target.host, metric='snmp%s' % oid,
            value=result.value)
        metrics.append(bulkmetric)
        saved += 1
      else:
        ignored += 1
        # TODO(bluecmd): Save this value to redis instead of ignoring it

    # Save collection stats
    bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
        hostname=task.target.host, metric='snmp.metrics.saved',
        value=saved)
    metrics.append(bulkmetric)
    bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
        hostname=task.target.host, metric='snmp.metrics.ignored',
        value=ignored)
    metrics.append(bulkmetric)

    try:
      self.dhmon.metricbulk(metrics)
    except IOError:
      logging.error('Failed to save metrics, ignoring this sample')

    logging.info('Save completed for %d metrics (ignored %d) for %s',
        saved, ignored, task.target.host)

  def shutdown(self):
    logging.info('Terminating result saver thread %d', self.pid)
