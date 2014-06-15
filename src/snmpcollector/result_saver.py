import logging
import multiprocessing as mp
import stage


class ResultSaver(stage.Stage):

  INTEGER_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self, task_queue, workers):
    logging.info('Starting result savers')
    self.path_queue = mp.JoinableQueue(1024*1024)
    super(ResultSaver, self).__init__(task_queue, 'result_saver',
        workers=workers)

  def startup(self):
    import dhmon
    self.dhmon = dhmon
    self.dhmon.connect(dhmon.CassandraBackend)
    logging.info('Started result saver thread %d', self.pid)

  def do(self, task):
    timestamp = int(task.target.timestamp)
    metrics = []

    saved = 0
    ignored = 0
    for oid, result in task.results.iteritems():
      if result.type in self.INTEGER_TYPES:
        bulkmetric = self.dhmon.BulkMetric(timestamp=timestamp,
            hostname=task.target.host, metric='snmp%s' % oid,
            value=result.value)
        metrics.append(bulkmetric)
        saved += 1
      else:
        # TODO(bluecmd): Save this to redis
        ignored += 1

    self.path_queue.put_nowait(set([metric.path for metric in metrics]))

    try:
      self.dhmon.metricbulk(metrics)
    except IOError:
      logging.error('Failed to save metrics, ignoring this sample')

    logging.info('Save completed for %d metrics (ignored %d) for %s',
        saved, ignored, task.target.host)

  def shutdown(self):
    logging.info('Terminating result saver thread %d', self.pid)
