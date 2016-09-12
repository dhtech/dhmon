#!/usr/bin/env python2
import logging
import sqlite3
import time
import yaml

import actions
import config
import snmp
import stage


class Supervisor(object):
  """Single instance target enumerator.

  When triggered the supervisor will scan ipplan.db to find all
  targets that should be polled. Every device is then passed as a
  message to the workers.
  """

  def fetch_nodes_ipplan(self, ipplan, domain):
    db = sqlite3.connect(ipplan)
    cursor = db.cursor()
    sql = ('SELECT h.name, h.ipv4_addr_txt, o.value, n.name '
        'FROM host h, option o, network n '
        'WHERE o.name = "layer" AND h.node_id = o.node_id '
        'AND h.network_id = n.node_id')
    # TODO(bluecmd): We should probably use an iterator here instead
    for host, ip, layer, network in cursor.execute(sql).fetchall():
      if network.split('@', 1)[0].lower() != domain:
        continue
      yield host, ip, layer

  def fetch_nodes_static(self, static, domain):
    with file(static) as f:
      for row in yaml.safe_load(f.read())[domain]:
        yield row['host'], row['ip'], row['layer']
        
  def fetch_nodes(self, domain):
    if config.get('static'):
      return self.fetch_nodes_static(config.get('static'), domain)
    elif config.get('ipplan'):
      return self.fetch_nodes_ipplan(config.get('ipplan'), domain)
    raise Exception('No target source defined')

  def construct_targets(self, timestamp):
    nodes = {}
    domain = config.get('domain').lower()
    for host, ip, layer in self.fetch_nodes(domain):
      layer_config = config.get('snmp', layer)
      if layer_config is None:
        logging.debug('Unable to target "%s" since layer "%s" is unknown',
            host, layer)
        continue
      yield host, snmp.SnmpTarget(host, ip, timestamp, layer, **layer_config)

  def do_trigger(self, run):
    timestamp = time.time()

    targets = 0
    for host, target in self.construct_targets(timestamp):
      targets += 1
      yield actions.SnmpWalk(target)

    # Record how many targets there are in this round to make it
    # possible to record pipeline latency
    yield actions.Summary(timestamp, targets)

    logging.info('New work pushed')


if __name__ == '__main__':
  stage = stage.Stage(Supervisor())
  stage.purge(actions.Trigger)
  stage.listen(actions.Trigger)
  stage.run()
