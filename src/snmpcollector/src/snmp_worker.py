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
    self.model_oid_cache_incarnation = 0
    super(SnmpWorker, self).__init__(
        'snmp_worker', task_queue='supervisor', result_queue='worker')

  def gather_oids(self, target, model):
    if config.incarnation != self.model_oid_cache_incarnation:
      self.model_oid_cache = {}

    cache_key = (target.layer, model)
    if cache_key in self.model_oid_cache:
      return self.model_oid_cache[cache_key]

    oids = set()
    vlan_aware_oids = set()
    for collection_name, collection in config.get('collection').iteritems():
      for regexp in collection['models']:
        layers = collection.get('layers', None)
        if layers and target.layer not in layers:
          continue
        if 'oids' in collection and re.match(regexp, model):
          logging.debug(
              'Model %s matches collection %s', model, collection_name)
          # VLAN aware collections are run against every VLAN.
          # We don't want to run all the other OIDs (there can be a *lot* of
          # VLANs).
          vlan_aware = collection.get('vlan_aware', False)
          if vlan_aware:
            vlan_aware_oids.update(set(collection['oids']))
          else:
            oids.update(set(collection['oids']))
    self.model_oid_cache[cache_key] = list(oids)
    return list(oids), list(vlan_aware_oids)

  def do_snmp_walk(self, target):
    model = target.model()
    if not model:
      # TODO(bluecmd): Log this failure to a metric
      logging.info('Unable to collect from %s, cannot get model', target.host)
      return

    logging.debug('Object %s is model %s', target.host, model)
    global_oids, vlan_oids = self.gather_oids(target, model)

    # 'None' is global (no VLAN aware)
    vlans = set([None])
    if vlan_oids:
      vlans.update(target.vlans())

    results = {}
    for vlan in list(vlans):
      oids = vlan_oids if vlan else global_oids
      for oid in oids:
        logging.debug('Collecting %s on %s @ %s', oid, target.host, vlan)
        if not oid.startswith('.1'):
          logging.warning(
              'OID %s does not start with .1, please verify configuration', oid)
          continue
        results.update(target.walk(oid, vlan))

    logging.debug('Done SNMP poll (%d objects) for "%s"',
        len(results.keys()), target.host)
    yield result_processor.ProcessAction(target, results)


if __name__ == '__main__':
  stage = SnmpWorker()
  stage.run()
