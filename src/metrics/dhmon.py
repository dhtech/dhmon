#!/usr/bin/env python
import collections
import socket
import sys
import time


BulkMetric = collections.namedtuple('BulkMetric', [
  'timestamp', 'hostname', 'metric', 'value'])


def metric(metric, value, hostname=None, timestamp=None):
    if timestamp is None:
        timestamp = int(time.time())
    if hostname is None:
        hostname = socket.getfqdn()

    # TODO(bluecmd): Write to cassandra?
    graphite_address = ( 'metricstore.event.dreamhack.se', 2003 )
    try:
      graphite_socket = socket.socket()
      graphite_socket.connect( graphite_address )
    except Exception as e:
      print ( 'Could not connect to Graphite on %s, port %d, %s',
          graphite_address[0], graphite_address[1], e )
      return False

    rev_hostname = '.'.join( reversed( hostname.split('.') ) )
    path = 'dh.%s.%s' % ( rev_hostname, metric )

    graphite_msg = '%s %s %s\n' % (path, value, timestamp)
    graphite_socket.send( graphite_msg )
    graphite_socket.close()
    return True


def metricbulk(values):
    graphite_address = ( 'metricstore.event.dreamhack.se', 2003 )
    try:
      graphite_socket = socket.socket()
      graphite_socket.connect( graphite_address )
    except Exception as e:
      print ( 'Could not connect to Graphite on %s, port %d, %s',
          graphite_address[0], graphite_address[1], e )
      return False

    for bulkmetric in values:
      rev_hostname = '.'.join( reversed( bulkmetric.hostname.split('.') ) )
      path = 'dh.%s.%s' % ( rev_hostname, bulkmetric.metric )

      graphite_msg = '%s %s %s\n' % (path, bulkmetric.timestamp,
          bulkmetric.timestamp)
      graphite_socket.send( graphite_msg )

    graphite_socket.close()
    return True
