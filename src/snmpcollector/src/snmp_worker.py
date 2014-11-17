#!/usr/bin/env python2
import logging
import re

import config
import result_processor
import snmp_target
import stage


class SnmpWalkAction(stage.Action):
  """Walk over a given device."""

  def __init__(self, target):
    self.target = target

  def do(self, stage):
    return stage.do_snmp_walk(self.target)


class SnmpWorker(stage.Stage):

  def __init__(self):
    self.model_oid_cache = {}
    super(SnmpWorker, self).__init__(
        'snmp_worker', task_queue='supervisor', result_queue='worker')

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

  def do_snmp_walk(self, target):
    model = target.model()
    if not model:
      # TODO(bluecmd): Log this failure to a metric
      logging.info('Unable to collect from %s, cannot get model', target.host)
      return

    logging.debug('Object %s is model %s', target.host, model)
    oids = self._gather_oids(model)
    results = {}
    for oid in oids:
      logging.debug('Collecting %s on %s', oid, target.host)
      results.update(target.walk(oid))

    logging.debug('Done SNMP poll (%d objects) for "%s"',
        len(results.keys()), target.host)
    yield result_processor.ProcessAction(target, results)


if __name__ == '__main__':
  stage = SnmpWorker()
  stage.run()
