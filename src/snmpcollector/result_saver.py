import multiprocessing as mp
import logging


class ResultSaver(object):

  STOP_TOKEN = None

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

  def worker(self, pid):
    logging.info('Started result saver thread %d', pid)
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      logging.debug('Saving result "%s"', task)
      import time
      time.sleep(1)
      logging.debug('Save complete')
      self.task_queue.task_done()

    self.task_queue.task_done()
    logging.info('Terminating result saver thread %d', pid)
