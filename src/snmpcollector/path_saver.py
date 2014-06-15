import logging
import multiprocessing as mp


class PathSaver(object):

  STOP_TOKEN = None

  def __init__(self, task_queue):
    workers = 1
    logging.info('Starting path saver')
    self.task_queue = task_queue
    self.workers = workers
    self.name = 'path_saver'
    for pid in range(workers):
      p = mp.Process(target=self.worker, args=(pid, ), name=self.name)
      p.start()

  def stop(self):
    for pid in range(self.workers):
      self.task_queue.put(self.STOP_TOKEN)
    self.task_queue.join()

  def worker(self, pid):
    try:
      import procname
      procname.setprocname(self.name)
    except ImportError:
      pass
    logging.info('Started path saver thread %d', pid)
    count = 0
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      count += 1
      if count % 1000 == 0:
        logging.info('Path counter: %d', count)
      self.task_queue.task_done()

    self.task_queue.task_done()
    logging.info('Terminating path saver thread %d', pid)
