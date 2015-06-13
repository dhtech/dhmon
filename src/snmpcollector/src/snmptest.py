#!/usr/bin/env python2
import argparse
import logging
import sqlite3
import sys
import time

import config
import supervisor
import worker


parser = argparse.ArgumentParser()
parser.add_argument(
    '-c', '--config', dest='config', default=None,
    help='configuration file override')
parser.add_argument(
    '-o', '--oid', dest='oid', default=None,
    help='walk this oid')
parser.add_argument('target', help='target to poll')
args = parser.parse_args()

sys.argv = [sys.argv[0]]
supervisor_stage = supervisor.Supervisor()

sys.argv = [sys.argv[0], '-d']
worker_stage = worker.Worker()

if args.config:
  config.CONFIG_FILENAME = args.config

targets = {host: target for host, target
           in supervisor_stage.construct_targets(time.time())}

start = time.time()
target = targets.get(args.target, None)
if not target:
  logging.error('Target not found')
  exit(1)

model = target.model()
if not model:
  logging.error(
      'Unable to fetch model, please check connectivity and configuration')
  exit(1)

logging.info('Target model: %s', model)
logging.info('Target VLANs: %s', target.vlans())

if args.oid:
  for i in target.walk(args.oid).iteritems():
    print >>sys.stderr, i
else:
  for action in worker_stage.do_snmp_walk(target):
    for key in sorted(action.results.keys()):
      print >>sys.stderr, key, action.results[key]

logging.info('Duration: %s', time.time() - start)
