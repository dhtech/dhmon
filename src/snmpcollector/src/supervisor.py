import Queue
import logging
import multiprocessing as mp
import stage
import sqlite3
import time
import yaml

import snmp_target
import config


class Supervisor(stage.Stage):

  TICK_TOKEN = 'TICK'

  def __init__(self):
    logging.info('Starting supervisor')
    task_queue = mp.JoinableQueue(1024)
    super(Supervisor, self).__init__(task_queue, 'supervisor', workers=1,
        result_queue=mp.JoinableQueue(1024*1024))

  def tick(self, signum=None, frame=None):
    logging.debug('Received tick, starting new poll cycle')
    self.task_queue.put_nowait(self.TICK_TOKEN)

  def _construct_targets(self, timestamp):
    db = sqlite3.connect('/etc/ipplan.db')
    cursor = db.cursor()
    sql = ("SELECT h.name, o.value FROM host h, option o WHERE o.name = 'layer'"
        "AND h.node_id = o.node_id")
    nodes = {}
    for host, layer in cursor.execute(sql).fetchall():
      layer_config = config.config['snmp'].get(layer, None)
      if layer_config is None:
        logging.error('Unable to target "%s" since layer "%s" is unknown',
            host, layer)
        continue
      nodes[host] = snmp_target.SnmpTarget(host, timestamp, **layer_config)
    return nodes

  def startup(self):
    logging.info('Started supervisor')

  def do(self, token):
    if token == self.TICK_TOKEN:
      timestamp = time.time()
      measure_runtime = stage.MeasureToken(name="runtime", blocker=True)
      measure_congestion = stage.MeasureToken(name="congestion", blocker=False)
      for target in self._construct_targets(timestamp).values():
        self.result_queue.put_nowait(target)
      self.result_queue.put_nowait(measure_congestion)
      self.result_queue.join()
      self.result_queue.put_nowait(measure_runtime)
      logging.info('New work pushed, length %d', self.result_queue.qsize())

  def shutdown(self):
    logging.info('Terminating supervisor')

