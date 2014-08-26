import logging
import multiprocessing as mp


class Stage(object):

  STOP_TOKEN = None

  def __init__(self, task_queue, name, workers):
    self.task_queue = task_queue
    self.workers = workers
    self.name = name
    for pid in range(workers):
      p = mp.Process(target=self.worker, args=(pid, ), name=self.name)
      p.start()

  def stop(self):
    for pid in range(self.workers):
      self.task_queue.put(self.STOP_TOKEN)
    self.task_queue.join()

  def startup(self, pid):
    pass

  def shutdown(self, pid):
    pass

  def do(self, task):
    pass

  def worker(self, pid):
    try:
      import procname
      procname.setprocname(self.name)
    except ImportError:
      pass

    self.pid = pid
    self.startup()
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      self.do(task)
      self.task_queue.task_done()

    self.task_queue.task_done()
    self.shutdown()
