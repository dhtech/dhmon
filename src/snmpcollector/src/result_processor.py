import logging
import multiprocessing as mp
import stage

import snmp_target


# TODO(bluecmd): This stage is not designed to run with multiple
# instances, but is perpared to be modified to allowed that.
class ResultProcessor(stage.Stage):

  def __init__(self, task_queue):
    logging.info('Starting result processor')
    self.result_queue = mp.JoinableQueue(1024*1024)
    self.counter_history = {}
    super(ResultProcessor, self).__init__(task_queue, 'result_processor',
        workers=1)

  def startup(self):
    logging.info('Started result processor thread %d', self.pid)

  def do(self, task):
    filtered_results = {}
    for oid, result in task.results.iteritems():
      skip = False
      if result.type == 'COUNTER64' or result.type == 'COUNTER':
        path = (task.target.host, oid)
        old_value = result.value
        if path in self.counter_history:
          if self.counter_history[path] > int(result.value):
            # TODO(bluecmd): Handle wrap-arounds
            pass

          new_value = int(result.value) - self.counter_history[path]
          result = snmp_target.ResultTuple(str(new_value), result.type)
        else:
          skip = True
        self.counter_history[path] = int(old_value)
      if not skip:
        filtered_results[oid] = result

    self.result_queue.put_nowait(snmp_target.SnmpResult(
      task.target, filtered_results))

  def shutdown(self):
    logging.info('Terminating result processor thread %d', self.pid)
