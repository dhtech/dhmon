#!/usr/bin/env python2
import base64
import collections
import logging
import time

import config
import mibresolver
import stage


AnnotatedResult = collections.namedtuple('AnnotatedResult',
    ('data', 'mib', 'obj', 'index', 'interface', 'vlan'))


class Annotator(stage.Stage):
  """Annotation step where results are given meaningful labels."""

  def __init__(self):
    super(ResultSaver, self).__init__()
    self.mibcache = {}

  def do_result(self, target, results):
    if_oids = config.get('annotator', 'annotate-oids-with-iface')
    iface_oid = config.get('annotator', 'iface-oid') + '.'

    # This is a hack to add human interfaces to metrics
    # Do a pre-scan to see if we have an updated ifDescr table
    # Basically add a label to the metric if we have an interface that matches
    # the index.
    interfaces_map = {}
    for oid, result in results.iteritems():
      # Check for ifDescr
      if oid.startswith(iface_oid):
        interfaces_map[oid[len(iface_oid):]] = result.value

    annotated_results = []
    for oid, result in results.iteritems():
      # Record some stats on how long time it took to get this metric
      elapsed = (time.time() - target.timestamp) * 1000 * 1000
      vlan = ''
      if '@' in oid:
        oid, vlan = oid.split('@')

      name = self.mibcache.get(oid, None)
      if name is None:
        name = mibresolver.resolve(oid)
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
      annotated_results.append(AnnotatedResult(
        result, mib, obj, index, interface, vlan))

    yield actions.AnnotatedResult(target, annotated_results)
    logging.debug('Annotation completed for %d metrics for %s',
        len(annotated_results), target.host)


if __name__ == '__main__':
  stage = Annotator()
  stage.listen(actions.Result)
  stage.run()
