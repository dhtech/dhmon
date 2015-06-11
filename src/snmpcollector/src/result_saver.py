#!/usr/bin/env python2
import base64
import logging
import time

import config
import stage


OID_ifDescr = '.1.3.6.1.2.1.2.2.1.2.'


class SaveAction(stage.Action):
  """Save a data set."""
  def __init__(self, target, results):
    self.target = target
    self.results = results

  def do(self, stage):
    return stage.do_save(self.target, self.results)


class ResultSaver(stage.Stage):

  INTEGER_TYPES = ['COUNTER', 'COUNTER64', 'INTEGER', 'TICKS', 'GAUGE']

  def __init__(self):
    super(ResultSaver, self).__init__('result_saver', task_queue='worker')
    self.mibresolver = None
    self.mibcache = {}

  def startup(self):
    import mibresolver
    self.mibresolver = mibresolver
    super(ResultSaver, self).startup()

  def do_save(self, target, results):
    if_oids = config.get('saver', 'if-oids')
    timestamp = int(target.timestamp)

    saved = 0

    # This is a hack to add human interfaces to metrics
    # Do a pre-scan to see if we have an updated ifDescr table
    # Basically add a label to the metric if we have an interface that matches
    # the index.
    interfaces_map = {}
    for oid, result in results.iteritems():
      # Check for ifDescr
      if oid.startswith(OID_ifDescr):
        interfaces_map[oid[len(OID_ifDescr):]] = result.value

    for oid, result in results.iteritems():
      # Record some stats on how long time it took to get this metric
      elapsed = (time.time() - target.timestamp) * 1000 * 1000

      name = self.mibcache.get(oid, None)
      if name is None:
        name = self.mibresolver.resolve(oid)
        self.mibcache[oid] = name

      if name is None:
        logging.warning('Failed to look up OID %s, ignoring', oid)
        continue

      mib, part = name.split('::', 1)
      obj, index = part.split('.', 1) if '.' in part else (part, None)

      # Add linterfaces label if we suspect this to be an interface metric
      interface = None
      for if_oid in if_oids:
        if oid.startswith(if_oid + '.') or oid == if_oid:
          interface = interfaces_map.get(index, None)
          break

      value = result.value
      if result.type in self.INTEGER_TYPES:
        value = int(value)
      else:
        value = '%s:%s' % (result.type, base64.b64encode(value))

      saved += 1

    # Save collection stats
    logging.debug('Save completed for %d metrics for %s', saved, target.host)


if __name__ == '__main__':
  stage = ResultSaver()
  stage.run()
