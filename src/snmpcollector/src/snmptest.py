#!/usr/bin/env python2
import argparse
import logging
import sqlite3
import sys
import time

import actions
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
parser.add_argument(
    '-n', '--numeric', dest='numeric', default=False, action='store_true',
    help='do not resolve oids')
parser.add_argument('target', help='target to poll')
args = parser.parse_args()

# Logging setup
root = logging.getLogger()
ch = logging.StreamHandler(sys.stderr)
formatter = logging.Formatter( '%(asctime)s - %(name)s - '
    '%(levelname)s - %(message)s' )
ch.setFormatter(formatter)
root.addHandler(ch)
root.setLevel(logging.DEBUG)

if not args.oid is None and args.oid[0] != '.':
  logging.error(
      'OID walk requested but OID does not begin with ".". '
      'Valid example: .1.3.6.1.2.1.1.3')
  sys.exit(1)

supervisor_stage = supervisor.Supervisor()
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

logging.debug('Loading MIBs and querying device ...')
# Load here to make user aware of what's going on
import mibresolver

model = target.model()
if not model:
  logging.error(
      'Unable to fetch model, please check connectivity and configuration')
  exit(1)

logging.info('Target model: %s', model)
logging.info('Target VLANs: %s', target.vlans())

if args.oid:
  for i in target.walk(args.oid).iteritems():
    print i
else:
  for action in worker_stage.do_snmp_walk(actions.RunInformation(), target):
    for key in sorted(action.results.keys()):
      print key if args.numeric else mibresolver.resolve(key),
      print action.results[key]
    logging.info('Run stats: %s', action.stats)

logging.info('Duration: %s', time.time() - start)
