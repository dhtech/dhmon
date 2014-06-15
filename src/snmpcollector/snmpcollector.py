#!/usr/bin/env python
import logging
import logging.handlers
import multiprocessing as mp
import os
import signal
import sys

import config
import path_saver
import result_processor
import result_saver
import snmp_worker
import supervisor
import supervisor


SNMP_WORKERS = 50
RESULT_SAVERS = 6


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

  _path_saver = path_saver.PathSaver(_result_saver.path_queue)

  def stop(signum, frame):
    logging.info('Stopping supervisor')
    _supervisor.stop()

    logging.info('Stopping SNMP workers')
    _snmp_worker.stop()

    logging.info('Stopping result processor')
    _result_processor.stop()

    logging.info('Stopping result saver')
    _result_saver.stop()

    logging.info('Stopping path saver')
    _path_saver.stop()

  signal.signal(signal.SIGALRM, _supervisor.tick)
  signal.signal(signal.SIGINT, stop)
  signal.signal(signal.SIGTERM, stop)

if __name__ == "__main__":
  root = logging.getLogger()

  root.addHandler(logging.handlers.SysLogHandler('/dev/log'))
  root.setLevel(logging.INFO)

  tracer = logging.getLogger('elasticsearch.trace')
  tracer.setLevel(logging.WARNING)
  tracer = logging.getLogger('elasticsearch')
  tracer.setLevel(logging.WARNING)


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
    import daemonize
    daemon = daemonize.Daemonize(app='snmpcollector',
        pid='/var/run/dhmon/snmpcollector.pid', action=main)
    daemon.start()
