import multiprocessing as mp
import logging
import Queue


class Supervisor(object):

  STOP_TOKEN = None
  TICK_TOKEN = 'TICK'

  def __init__(self):
    logging.info('Starting supervisor')
    self.control_queue = mp.JoinableQueue()
    self.work_queue = mp.JoinableQueue()
    p = mp.Process(target=self.worker, args=())
    p.start()

  def stop(self):
    self.control_queue.put(self.STOP_TOKEN)
    self.control_queue.join()

  def tick(self):
    logging.debug('Received tick, starting new poll cycle')
    self.control_queue.put(TICK_TOKEN)

  def _new_cycle(self):
    self.work_queue.put('Hej SG')
    logging.info('New work pushed, length %d', self.work_queue.qsize())

  def worker(self):
    logging.info('Started supervisor')
    running = True
    for token in iter(self.control_queue.get, self.STOP_TOKEN):
      if token == self.TICK_TOKEN:
        self._new_cycle()

    self.control_queue.task_done()
    logging.info('Terminating supervisor')
