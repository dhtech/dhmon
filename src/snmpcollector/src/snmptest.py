#!/usr/bin/env python2
import logging
import sqlite3
import sys
import time

import config
import supervisor
import snmp_worker


logging.basicConfig(level=logging.DEBUG)

config.load('/etc/snmpcollector.yaml')
supervisor_stage = supervisor.Supervisor()
worker_stage = snmp_worker.SnmpWorker()

targets = {host: target for host, target
           in supervisor_stage.construct_targets(time.time())}

target = targets.get(sys.argv[1], None)
if not target:
  print 'Target not found'
  exit(1)

print 'Target model:', target.model()

for action in worker_stage.do_snmp_walk(target):
  for key in sorted(action.results.keys()):
    print key, action.results[key]


