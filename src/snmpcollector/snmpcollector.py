#!/usr/bin/env python
import multiprocessing as mp
import logging
import sys

import result_processor
import result_saver
import snmp_worker


SNMP_WORKERS = 1
RESULT_SAVERS = 1


def main():
  root = logging.getLogger()

  ch = logging.StreamHandler( sys.stdout )
  ch.setLevel( logging.DEBUG )
  formatter = logging.Formatter( '%(asctime)s - %(name)s - '
      '%(levelname)s - %(message)s' )
  ch.setFormatter( formatter )
  root.addHandler( ch )
  root.setLevel( logging.DEBUG )

  snmp_task_queue = mp.JoinableQueue()

  _snmp_worker = snmp_worker.SnmpWorker(snmp_task_queue, SNMP_WORKERS)

  _result_processor = result_processor.ResultProcessor(
      _snmp_worker.result_queue)

  _result_saver = result_saver.ResultSaver(
      _result_processor.result_queue, RESULT_SAVERS)

  #logging.info('Starting result savers')
  #for pid in range(RESULT_SAVERS):
  #  p = mp.Process(target=snmp_worker,
  #      args=(pid, snmp_task_queue, snmp_result_queue))
  #  p.start()
  import time
  time.sleep(1)

  snmp_task_queue.put('Hej SG')

  logging.info('Stopping SNMP workers')
  _snmp_worker.stop()
  _snmp_worker.task_queue.join()

  logging.info('Stopping result processor')
  _result_processor.stop()
  _result_processor.task_queue.join()

  logging.info('Stopping result saver')
  _result_saver.stop()
  _result_saver.task_queue.join()

  logging.info('Shutdown complete')
  time.sleep(3)

if __name__ == "__main__":
  main()
