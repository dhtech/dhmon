#!/usr/bin/env python2
import base64
import collections
import logging
import time

import actions
import config
import stage


class Annotator(object):
  """Annotation step where results are given meaningful labels."""

  def __init__(self):
    super(Annotator, self).__init__()
    self.mibcache = {}
    self.mibresolver = None

  def startup(self):
    super(Annotator, self).startup()
    # Do the import here to not spam the terminal with netsnmp stuff
    import mibresolver
    self.mibresolver = mibresolver

  def do_result(self, run, target, results, stats):
    annotations = config.get('annotator', 'annotations')

    # Calculate map to skip annotation if we're sure we're not going to annotate
    # TODO(bluecmd): This could be cached
    annotation_map = {}
    for annotation in annotations:
      for annotate in annotation['annotate']:
        # Add '.' to not match .1.2.3 if we want to annotate 1.2.30
        annotation_map[annotate + '.'] = annotation['with']

    # Calculate annotator map
    split_oid_map = collections.defaultdict(dict)
    for oid, result in results.iteritems():
      # We only support the last part of an OID as index for annotations
      key, index = oid.rsplit('.', 1)
      key += '.'
      split_oid_map[key][index] = result.value

    annotated_results = {}
    for oid, result in results.iteritems():
      # Record some stats on how long time it took to get this metric
      elapsed = (time.time() - target.timestamp) * 1000 * 1000
      labels = {}
      vlan = ''

      if '@' in oid:
        oid, vlan = oid.split('@')

      name = self.mibcache.get(oid, None)
      if name is None:
        name = self.mibresolver.resolve(oid)
        self.mibcache[oid] = name

      if name is None:
        logging.warning('Failed to look up OID %s, ignoring', oid)
        continue

      mib, part = name.split('::', 1)
      obj, index = part.split('.', 1) if '.' in part else (part, None)

      labels = {'vlan': vlan}
      labels.update(self.annotate(oid, annotation_map, split_oid_map, results))

      annotated_results[oid] = actions.AnnotatedResultEntry(
          result, mib, obj, index, labels)

    yield actions.AnnotatedResult(target, annotated_results, stats)
    logging.debug('Annotation completed for %d metrics for %s',
        len(annotated_results), target.host)

  def annotate(self, oid, annotation_map, split_oid_map, results):
    for key in annotation_map:
      if oid.startswith(key):
        break
    else:
      return {}

    # We only support the last part of an OID as index for annotations
    _, index = oid.rsplit('.', 1)
    labels = {}
    for label, annotation_oid in annotation_map[key].iteritems():
      annotation_key = annotation_oid + '.'
      part = split_oid_map.get(annotation_key, None)
      if not part:
        continue
      value = part.get(index, None)
      if not value:
        continue
      labels[label] = value.replace('"', '\\"')
    return labels


if __name__ == '__main__':
  annotator = stage.Stage(Annotator())
  annotator.listen(actions.Result)
  annotator.run()
