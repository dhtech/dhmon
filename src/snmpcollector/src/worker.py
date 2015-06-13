#!/usr/bin/env python2
import collections
import logging
import re

import actions
import config
import target
import stage


class Worker(stage.Stage):

  def __init__(self):
    super(Worker, self).__init__()
    self.model_oid_cache = {}
    self.model_oid_cache_incarnation = 0

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

  def do_overrides(self, results):
    overrides = config.get('worker', 'override')
    if not overrides:
      return results
    overridden_oids = set(overrides.keys())

    overriden_results = results
    for oid, result in results.iteritems():
      root = '.'.join(oid.split('.')[:-1])
      if root in overridden_oids:
        overriden_results[oid] = target.ResultTuple(
            result.value, overrides[root])
    return overriden_results

  def do_snmp_walk(self, target):
    try:
      model = target.model()
    except target.Error, e:
      logging.exception('Could not determine model of %s:', target.host)
      return
    if not model:
      logging.error('Could not determine model of %s')
      return

    logging.debug('Object %s is model %s', target.host, model)
    global_oids, vlan_oids = self.gather_oids(target, model)

    timeouts = 0
    errors = 0

    # 'None' is global (no VLAN aware)
    vlans = set([None])
    try:
      if vlan_oids:
        vlans.update(target.vlans())
    except target.Error, e:
      errors += 1
      logging.warning('Could not list VLANs: %s', str(e))

    results = {}
    for vlan in list(vlans):
      oids = vlan_oids if vlan else global_oids
      for oid in oids:
        logging.debug('Collecting %s on %s @ %s', oid, target.host, vlan)
        if not oid.startswith('.1'):
          logging.warning(
              'OID %s does not start with .1, please verify configuration', oid)
          continue
        try:
          results.update(self.do_overrides(target.walk(oid, vlan)))
        except target.TimeoutError, e:
          timeouts += 1
          if vlan:
            logging.debug(
                'Timeout, is switch configured for VLAN SNMP context? %s', e)
          else:
            logging.debug('Timeout, slow switch? %s', e)
        except target.Error, e:
          errors += 1
          logging.warning('SNMP error for OID %s@%s: %s', oid, vlan, str(e))
 
    logging.debug('Done SNMP poll (%d objects) for "%s"',
        len(results.keys()), target.host)
    yield actions.Result(target, results, actions.Statistics(timeouts, errors))


if __name__ == '__main__':
  stage = Worker()
  stage.listen(actions.SnmpWalk)
  stage.run()
