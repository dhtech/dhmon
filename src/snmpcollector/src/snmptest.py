#!/usr/bin/env python2
import logging
import sqlite3
import sys
import time

import supervisor
import snmp_worker


logging.basicConfig(level=logging.DEBUG)

supervisor_stage = supervisor.Supervisor()
worker_stage = snmp_worker.SnmpWorker()

targets = {host: target for host, target
           in supervisor_stage.construct_targets(time.time())}

target = targets.get(sys.argv[1], None)
if not target:
  print 'Target not found'
  exit(1)

model = target.model()
if not model:
  print 'Unable to fetch model, please check connectivity and configuration'
  exit(1)

print 'Target model:', model

print 'Target VLANs:', target.vlans()

if len(sys.argv) > 2:
  for i in target.walk(sys.argv[2]).iteritems():
    print i
else:
  for action in worker_stage.do_snmp_walk(target):
    for key in sorted(action.results.keys()):
      print key, action.results[key]
