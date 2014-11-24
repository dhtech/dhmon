#!/usr/bin/env python2
import logging
import sqlite3
import time

import config
import snmp_target
import snmp_worker
import stage


class TriggerAction(stage.Action):

  def do(self, stage):
    return stage.do_trigger()


class Supervisor(stage.Stage):

  def __init__(self):
    super(Supervisor, self).__init__(
        'supervisor', task_queue='trigger', result_queue='supervisor')

  def construct_targets(self, timestamp):
    db = sqlite3.connect('/etc/ipplan.db')
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
      yield host, snmp_target.SnmpTarget(host, ip, timestamp, layer,
                                         **layer_config)

  def do_trigger(self):
    timestamp = time.time()
    # TODO: reinvent this
    #measure_runtime = stage.MeasureToken(name="runtime", blocker=True)
    #measure_congestion = stage.MeasureToken(name="congestion", blocker=False)

    for host, target in self.construct_targets(timestamp):
      yield snmp_worker.SnmpWalkAction(target)

    logging.info('New work pushed')


if __name__ == '__main__':
  stage = Supervisor()
  stage.run(purge_task_queue=True)
