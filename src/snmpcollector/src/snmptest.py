#!/usr/bin/env python2
import logging
import sqlite3
import sys
import time

import supervisor
import worker


host = sys.argv[1]
oid = None
if len(sys.argv) > 2:
  oid = sys.argv[2]
  del sys.argv[2]
del sys.argv[1]

logging.basicConfig(level=logging.DEBUG)

supervisor_stage = supervisor.Supervisor()
worker_stage = worker.Worker()

targets = {host: target for host, target
           in supervisor_stage.construct_targets(time.time())}

start = time.time()
target = targets.get(host, None)
if not target:
  print 'Target not found'
  exit(1)

model = target.model()
if not model:
  print 'Unable to fetch model, please check connectivity and configuration'
  exit(1)

print 'Target model:', model

print 'Target VLANs:', target.vlans()

if oid:
  for i in target.walk(oid).iteritems():
    print i
else:
  for action in worker_stage.do_snmp_walk(target):
    for key in sorted(action.results.keys()):
      print key, action.results[key]
for action in worker_stage.do_snmp_walk(target):
  for key in sorted(action.results.keys()):
    print key, action.results[key]

print 'Duration:', time.time() - start
