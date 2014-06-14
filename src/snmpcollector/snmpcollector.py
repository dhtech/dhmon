#!/usr/bin/env python
import daemonize
import logging
import multiprocessing as mp
import os
import signal
import sys

import config
import result_processor
import result_saver
import snmp_worker
import supervisor


SNMP_WORKERS = 20
RESULT_SAVERS = 3


def main():
  config.load('/etc/snmpcollector.yaml')

  signal.signal(signal.SIGINT, signal.SIG_IGN)
  signal.signal(signal.SIGALRM, signal.SIG_IGN)
  signal.signal(signal.SIGTERM, signal.SIG_IGN)

  _supervisor = supervisor.Supervisor()

  _snmp_worker = snmp_worker.SnmpWorker(
      _supervisor.work_queue, SNMP_WORKERS)

  #_result_saver = result_saver.ResultSaver(
  #    _snmp_worker.result_queue, RESULT_SAVERS)

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

  signal.signal(signal.SIGALRM, _supervisor.tick)
  signal.signal(signal.SIGINT, stop)
  signal.signal(signal.SIGTERM, stop)

if __name__ == "__main__":
  root = logging.getLogger()

  root.addHandler(logging.handlers.SysLogHandler('/dev/log'))
  root.setLevel(logging.DEBUG)

  if len(sys.argv) > 1 and sys.argv[1] == '-d':
    ch = logging.StreamHandler(sys.stdout)
    ch.setLevel(logging.DEBUG)
    formatter = logging.Formatter( '%(asctime)s - %(name)s - '
        '%(levelname)s - %(message)s' )
    ch.setFormatter(formatter)
    root.addHandler(ch)
    with open('/var/run/dhmon/snmpcollector.pid', 'w') as pidfile:
      pidfile.write(str(os.getpid()))
    main()
  else:
    # TODO(bluecmd): Fix this
    daemon = daemonize.Daemonize(app='snmpcollector',
        pid='/var/run/dhmon/snmpcollector.pid', action=main)
    daemon.start()
