import multiprocessing as mp
import logging


class SnmpWorker(object):

  STOP_TOKEN = None

  def __init__(self, task_queue, workers):
    logging.info('Starting SNMP workers')
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
    logging.info('Started SNMP worker thread %d', pid)
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      result = task.walk('.1.3.6.1.2.1.31.1.1.1.1')
      result = task.get('.1.3.6.1.2.1.31.1.1.1.1.1')
      logging.debug('Done SNMP poll for "%s"', task.host)
      self.result_queue.put(result)
      self.task_queue.task_done()

    self.task_queue.task_done()
    logging.info('Terminating SNMP worker thread %d', pid)
