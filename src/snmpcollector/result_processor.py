import multiprocessing as mp
import logging


StopToken = object()

# TODO(bluecmd): This stage is not designed to run with multiple
# instances, but is perpared to be modified to allowed that.
class ResultProcessor(object):

  STOP_TOKEN = None

  def __init__(self, task_queue):
    workers = 1
    logging.info('Starting result processor')
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
    logging.info('Started result processor thread %d', pid)
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      logging.debug('Processing result "%s"', task)
      self.result_queue.put('Processed %s' % (task, ))
      self.task_queue.task_done()

    self.task_queue.task_done()
    logging.info('Terminating result processor thread %d', pid)
