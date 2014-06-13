import multiprocessing as mp
import logging

import snmp_target


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
    self.counter_history = {}
    for pid in range(workers):
      p = mp.Process(target=self.worker, args=(pid, ))
      p.start()

  def stop(self):
    for pid in range(self.workers):
      self.task_queue.put(self.STOP_TOKEN)
    self.task_queue.join()

  def worker(self, pid):
    logging.info('Started result processor thread %d', pid)
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      #logging.debug('Processing result "%s"', task)
      filtered_results = {}
      skip = False
      for oid, result in task.results.iteritems():
        if result.type == 'COUNTER64' or result.type == 'COUNTER':
          path = (task.target.host, oid)
          old_value = result.value
          if path in self.counter_history:
            new_value = int(result.value) - self.counter_history[path]
            # TODO(bluecmd): Handle wrap-arounds
            result = snmp_target.ResultTuple(str(new_value), result.type)
            logging.debug('Result delta: %s', result.value)
          else:
            skip = True
          self.counter_history[path] = int(old_value)
        if not skip:
          filtered_results[oid] = result

      self.result_queue.put(filtered_results)
      self.task_queue.task_done()

    self.task_queue.task_done()
    logging.info('Terminating result processor thread %d', pid)
