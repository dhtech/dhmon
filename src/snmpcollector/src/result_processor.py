#!/usr/bin/env python2
import logging

import result_saver
import snmp_target
import stage


class ProcessAction(stage.Action):
  """Process a raw SNMP walk result set.

  This will calculate deltas and other nice stuff that makes the
  data generally much more manageable."""

  def __init__(self, target, results):
    self.target = target
    self.results = results

  def do(self, stage):
    return stage.do_process(self.target, self.results)


# TODO(bluecmd): This stage is not designed to run with multiple
# instances, but is perpared to be modified to allowed that.
class ResultProcessor(stage.Stage):

  def __init__(self):
    self.counter_history = {}
    super(ResultProcessor, self).__init__(
        'result_processor', task_queue='worker', result_queue='processed')

  def do_process(self, target, results):
    filtered_results = {}
    for oid, entry in results.iteritems():
      skip = False
      if entry.type == 'COUNTER64' or entry.type == 'COUNTER':
        path = (target.host, oid)
        old_value = entry.value
        if path in self.counter_history:
          # Default to delta for counter values
          new_value = int(entry.value) - self.counter_history[path]

          # Check for wrap-around
          if self.counter_history[path] > int(entry.value):
            intmax = 0
            if entry.type == 'COUNTER64':
              intmax = pow(2, 64)
            else:
              intmax = pow(2, 32)
            new_value = int(entry.value) + intmax - self.counter_history[path]

          # Create new result tuple
          entry = snmp_target.ResultTuple(str(new_value), entry.type)
        else:
          skip = True
        self.counter_history[path] = int(old_value)
      if not skip:
        filtered_results[oid] = entry

    yield result_saver.SaveAction(target, filtered_results)


if __name__ == '__main__':
  stage = ResultProcessor()
  stage.run()
