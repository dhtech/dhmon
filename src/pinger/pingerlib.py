import json
import pika
import socket
import sys
import threading
import time
import yaml
import Queue


def connect():
  config = yaml.safe_load(file('/etc/dhmon.yaml'))
  mq = config.get('mq', None)
  if not mq:
    raise KeyError('No "mq" key in config file /etc/dhmon.yaml')
  credentials = pika.PlainCredentials(mq['username'], mq['password'])
  connection = pika.BlockingConnection(
      pika.ConnectionParameters(mq['host'], credentials=credentials))
  return connection


connection = connect()


def ping(ips):
  channel = connection.channel()
  request_queue = 'dhmon:pinger:req:%s' % socket.getfqdn()
  for ip in ips:
    channel.basic_publish(exchange='', routing_key=request_queue, body=ip)
  channel.close()


def _receive_thread(queue, timeout):
  channel = connection.channel()
  response_queue = 'dhmon:pinger:resp:%s' % socket.getfqdn()
  def consume(channel, method, properties, body):
    ip, secs, usecs = json.loads(body)
    queue.put((ip, secs, usecs))

  def done():
    channel.close()
    queue.put(None)

  if timeout:
    connection.add_timeout(1, done)
  channel.basic_consume(consume, queue=response_queue, no_ack=True)
  channel.start_consuming()


def receive(timeout=None):
  queue = Queue.Queue()
  t = threading.Thread(target=_receive_thread, args=(queue, timeout))
  t.start()

  while True:
    entry = queue.get()
    if not entry:
      break
    yield entry

  t.join()

if __name__ == '__main__':
  ping(sys.argv[1:])
  for ip, secs, usecs in receive(1):
    print 'Reply:', ip, (secs*1000.0 + usecs / 1000.0)
