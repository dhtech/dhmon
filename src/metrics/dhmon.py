#!/usr/bin/env python
import socket
import sys

def metric(timestamp, hostname, metric, value):
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
