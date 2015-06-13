#!/usr/bin/env python2
import logging
import sqlite3
import time

import actions
import config
import snmp
import stage


class Supervisor(stage.Stage):
  """Single instance target enumerator.

  When triggered the supervisor will scan ipplan.db to find all
  targets that should be polled. Every device is then passed as a
  message to the workers.
  """

  def construct_targets(self, timestamp):
    db = sqlite3.connect(config.get('ipplan'))
    cursor = db.cursor()
    sql = ("SELECT h.name, h.ipv4_addr_txt, o.value FROM host h, option o "
        "WHERE o.name = 'layer' AND h.node_id = o.node_id")
    nodes = {}
    for host, ip, layer in cursor.execute(sql).fetchall():
      layer_config = config.get('snmp', layer)
      if layer_config is None:
        logging.error('Unable to target "%s" since layer "%s" is unknown',
            host, layer)
        continue
      yield host, snmp.SnmpTarget(host, ip, timestamp, layer, **layer_config)

  def do_trigger(self):
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
  stage = Supervisor()
  stage.purge(actions.Trigger)
  stage.listen(actions.Trigger)
  stage.run()
