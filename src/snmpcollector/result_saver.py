import multiprocessing as mp
import logging


class ResultSaver(object):

  STOP_TOKEN = None

  INTEGER_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self, task_queue, workers):
    logging.info('Starting result savers')
    self.task_queue = task_queue
    self.result_queue = mp.JoinableQueue()
    self.workers = workers
    for pid in range(workers):
      p = mp.Process(target=self.worker, args=(pid, ))
      p.start()

  def stop(self):
    for pid in range(self.workers):
      self.task_queue.put(self.STOP_TOKEN)
    self.task_queue.join()

  def worker(self, pid):
    import dhmon
    dhmon.connect()
    logging.info('Started result saver thread %d', pid)
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      timestamp = int(task.target.timestamp)
      metrics = []

      saved = 0
      ignored = 0
      for oid, result in task.results.iteritems():
        if result.type in self.INTEGER_TYPES:
          bulkmetric = dhmon.BulkMetric(timestamp=timestamp,
              hostname=task.target.host, metric='snmp%s' % oid,
              value=result.value)
          metrics.append(bulkmetric)
          saved += 1
        else:
          # TODO(bluecmd): Save this to redis
          ignored += 1

      try:
        dhmon.metricbulk(metrics)
      except IOError:
        logging.error('Failed to save metrics, ignoring this sample')

      logging.debug('Save completed for %d metrics (ignored %d) for %s',
          saved, ignored, task.target.host)
      self.task_queue.task_done()

    self.task_queue.task_done()
    logging.info('Terminating result saver thread %d', pid)
