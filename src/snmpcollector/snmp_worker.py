import logging
import multiprocessing as mp
import re
import stage

import config
import snmp_target


class SnmpWorker(stage.Stage):

  def __init__(self, task_queue, workers):
    logging.info('Starting SNMP workers')
    self.model_oid_cache = {}
    self.result_queue = mp.JoinableQueue(1024*1024)
    super(SnmpWorker, self).__init__(task_queue, 'snmp_worker', workers=workers)

  def _gather_oids(self, model):
    if model in self.model_oid_cache:
      return self.model_oid_cache[model]

    oids = set()
    for collection_name, collection in config.config['collection'].iteritems():
      for regexp in collection['models']:
        if 'oids' in collection and re.match(regexp, model):
          oids.update(set(collection['oids']))
          break
    self.model_oid_cache[model] = list(oids)
    return list(oids)

  def startup(self):
    logging.info('Started SNMP worker thread %d', self.pid)

  def do(self, task):
    model = task.model()
    if not model:
      # TODO(bluecmd): Log this failure to a metric
      logging.debug('Unable to collect from %s, cannot get model', task.host)
      return

    logging.debug('Object %s is model %s', task.host, model)
    oids = self._gather_oids(model)
    results = {}
    for oid in oids:
      logging.debug('Collecting %s on %s', oid, task.host)
      results.update(task.walk(oid))

    logging.debug('Done SNMP poll (%d objects) for "%s"',
        len(results.keys()), task.host)
    self.result_queue.put_nowait(snmp_target.SnmpResult(
      target=task, results=results))

  def shutdown(self):
    logging.info('Terminating SNMP worker thread %d', self.pid)
