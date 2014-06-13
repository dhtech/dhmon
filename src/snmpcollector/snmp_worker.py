import logging
import multiprocessing as mp
import re

import config
import snmp_target


class SnmpWorker(object):

  STOP_TOKEN = None

  def __init__(self, task_queue, workers):
    logging.info('Starting SNMP workers')
    self.model_oid_cache = {}
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


  def _gather_oids(self, model):
    if model in self.model_oid_cache:
      return self.model_oid_cache[model]

    oids = set()
    for collection_name, collection in config.config['collection'].iteritems():
      for regexp in collection['models']:
        if re.match(regexp, model):
          oids.update(set(collection['oids']))
          break
    self.model_oid_cache[model] = list(oids)
    return list(oids)

  def worker(self, pid):
    logging.info('Started SNMP worker thread %d', pid)
    for task in iter(self.task_queue.get, self.STOP_TOKEN):
      model = task.model()
      if model is None:
        # TODO(bluecmd): Log this failure to a metric
        logging.debug('Unable to collect from %s, cannot get model', task.host)
        self.task_queue.task_done()
        continue

      oids = self._gather_oids(model)
      results = {}
      for oid in oids:
        logging.debug('Collecting %s on %s', oid, task.host)
        results.update(task.walk(oid))

      logging.debug('Done SNMP poll for "%s"', task.host)
      self.result_queue.put(snmp_target.SnmpResult(
        target=task, results=results))
      self.task_queue.task_done()

    self.task_queue.task_done()
    logging.info('Terminating SNMP worker thread %d', pid)
