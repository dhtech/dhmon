import abc
import argparse
import logging
import logging.handlers
import os
import pickle
import pika
import sys
import time

import config

class Action(object):
  """Base class that represents an Action that moves between stages."""
  __metadata__ = abc.ABCMeta

  @abc.abstractmethod
  def do(self, stage):
    """Execute an action, return a list of result actions."""
    pass


class Stage(object):
  """Base class for SNMP collector workers.

  By implementing this class you will get access to the
  appropriate RabbitMQ queues and event processing.

  When an Action instance is pushed, it will be executed with the
  stage (class instance) as a parameter.
  """

  def __init__(self, name, task_queue=None, result_queue=None):
    self.name = name
    self.task_queue = 'dhmon:snmp:%s' % task_queue if task_queue else None
    self.result_queue = 'dhmon:snmp:%s' % result_queue if result_queue else None
    self.task_channel = None
    self.result_channel = None
    self.connection = None

  def startup(self):
    mq = config.get('mq')
    credentials = pika.PlainCredentials(mq['username'], mq['password'])
    self.connection = pika.BlockingConnection(
        pika.ConnectionParameters(mq['host'], credentials=credentials))
    if self.result_queue:
      self.result_channel = self.connection.channel()
    logging.info('Started %s', self.name)

  def shutdown(self):
    logging.info('Terminating %s', self.name)
    # This closes channels as well
    self.connection.close()
    self.connection = None
    self.result_channel = None
    self.task_channel = None

  def push(self, action, expire=None):
    if not self.result_channel:
      return
    properties = pika.BasicProperties(
        expiration=str(expire) if expire else None)
    self.result_channel.basic_publish(
        exchange='', routing_key=self.result_queue,
        body=pickle.dumps(action, protocol=pickle.HIGHEST_PROTOCOL),
        properties=properties)

  def _task_wrapper_callback(self, channel, method, properties, body):
    try:
      self._task_callback(channel, method, properties, body)
    except Exception, e:
      #dhmon.metric(
      #    'snmpcollector.task.exceptions.str', str(e), hostname=self.name)
      logging.exception('Unhandled exception in task loop:')

  def _task_callback(self, channel, method, properties, body):
    action = pickle.loads(body)
    if not isinstance(action, Action):
      logging.error('Got non-action in task queue: %s', repr(body))
      channel.basic_ack(delivery_tag=method.delivery_tag)
      return

    # Buffer up on all outgoing actions to ack only when we're done
    action_generator = action.do(self)
    actions = list(action_generator) if action_generator else []

    # Ack now, if we die during sending we will hopefully not crash loop
    channel.basic_ack(delivery_tag=method.delivery_tag)
    for action in actions:
      self.push(action)

  def _setup(self, purge_task_queue):
    root = logging.getLogger()
    root.addHandler(logging.handlers.SysLogHandler('/dev/log'))
    root.setLevel(logging.INFO)

    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-d', '--debug', dest='debug', action='store_const', const=True,
        default=False, help='do not fork, print output to console')
    parser.add_argument('pidfile', help='pidfile to write')
    args = parser.parse_args()

    if args.debug:
      root.setLevel(logging.DEBUG)
      ch = logging.StreamHandler(sys.stdout)
      ch.setLevel(logging.DEBUG)
      logging.getLogger('pika').setLevel(logging.ERROR)

      formatter = logging.Formatter( '%(asctime)s - %(name)s - '
          '%(levelname)s - %(message)s' )
      ch.setFormatter(formatter)
      root.addHandler(ch)
      self._internal_run(args.pidfile, purge_task_queue)
    else:
      import daemon
      with daemon.DaemonContext():
        self._internal_run(args.pidfile, purge_task_queue)

  def run(self, purge_task_queue=False):
    if not self.task_queue:
      raise ValueError('Cannot run a stage that lacks an input queue')

    self._setup(purge_task_queue)

  def _internal_run(self, pidfile, purge_task_queue):
    logging.info('Starting %s', self.name)

    try:
      import procname
      procname.setprocname(self.name)
    except ImportError:
      pass

    with open(pidfile, 'w') as f:
      f.write(str(os.getpid()))

    # On error, restart this thread
    running = True
    while running:
      self.startup()

      self.task_channel = self.connection.channel()
      self.task_channel.queue_declare(queue=self.task_queue)
      self.task_channel.basic_qos(prefetch_count=1)

      if purge_task_queue:
        self.task_channel.queue_purge(queue=self.task_queue)

      self.task_channel.basic_consume(
          self._task_wrapper_callback, queue=self.task_queue)
      try:
        self.task_channel.start_consuming()
      except KeyboardInterrupt:
        logging.error('Keyboard interrupt, shutting down..')
        running = False
      except Exception, e:
        logging.exception('Unhandled exception, restarting stage')

      try:
        self.shutdown()
      except Exception, e:
        logging.exception('Exception in shutdown')
