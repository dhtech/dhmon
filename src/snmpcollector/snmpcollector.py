#!/usr/bin/env python
import multiprocessing as mp
import logging
import signal
import sys

import result_processor
import result_saver
import snmp_worker
import supervisor


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

  signal.signal(signal.SIGINT, signal.SIG_IGN)
  signal.signal(signal.SIGALRM, signal.SIG_IGN)
  signal.signal(signal.SIGTERM, signal.SIG_IGN)

  quit_semaphore = mp.Semaphore(0)
  _supervisor = supervisor.Supervisor()

  _snmp_worker = snmp_worker.SnmpWorker(
      _supervisor.work_queue, SNMP_WORKERS)

  _result_processor = result_processor.ResultProcessor(
      _snmp_worker.result_queue)

  _result_saver = result_saver.ResultSaver(
      _result_processor.result_queue, RESULT_SAVERS)

  def stop(signum, frame):
    logging.info('Stopping supervisor')
    _supervisor.stop()

    logging.info('Stopping SNMP workers')
    _snmp_worker.stop()

    logging.info('Stopping result processor')
    _result_processor.stop()

    logging.info('Stopping result saver')
    _result_saver.stop()

    quit_semaphore.release()

  signal.signal(signal.SIGALRM, _supervisor.tick)
  signal.signal(signal.SIGINT, stop)
  signal.signal(signal.SIGTERM, stop)

  if len(sys.argv) > 1 and sys.argv[1] == '-d':
    signal.alarm(1)

if __name__ == "__main__":
  main()
