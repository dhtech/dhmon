import logging
import multiprocessing as mp
import time


class MeasureToken(object):
  def __init__(self, name, blocker=False):
    self._start = time.time()
    self._stop = None
    self.name = name
    self.blocker = blocker
    self.elapsed = None

  def stop(self):
    self._stop = time.time()
    self.elapsed = self._stop - self._start


class Stage(object):

  STOP_TOKEN = None

  def __init__(self, task_queue, name, workers, result_queue=None):
    self.task_queue = task_queue
    self.workers = workers
    self.name = name
    if result_queue:
      self.result_queue = result_queue
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

  def measure(self, token):
    if token.blocker:
      self.result_queue.join()
    self.result_queue.put_nowait(token)

  def worker(self, pid):
    try:
      import procname
      procname.setprocname(self.name)
    except ImportError:
      pass

    self.pid = pid
    self.startup()
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      if isinstance(task, MeasureToken):
        self.measure(task)
      else:
        self.do(task)
      self.task_queue.task_done()

    self.task_queue.task_done()
    self.shutdown()
