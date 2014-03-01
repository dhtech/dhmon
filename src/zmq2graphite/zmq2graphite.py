import collections
import cPickle as pickle
import json
import logging
import os
import signal
import socket
import struct
import sys
import sqlite3
import threading
import time
import zmq

root = logging.getLogger()

ch = logging.StreamHandler( sys.stdout )
ch.setLevel( logging.DEBUG )
formatter = logging.Formatter( '%(asctime)s - %(name)s - '
  '%(levelname)s - %(message)s' )
ch.setFormatter( formatter )
root.addHandler( ch )
root.setLevel( logging.DEBUG )

class zmq2graphite(object):

  def __init__(self, database="ipplan.db", zmq=("*", 5555), graphite=("127.0.0.1", 2004) ):
    self.total_stats = collections.Counter()
    self.stats = collections.Counter()
    self.graphite_counters = [ 'inserts', 'db_rebuilds', 'db_rebuild_errors',
        'dumps', 'dump_errors', 'graphite_connects', 'unique_objects',
        'exceptions' ]
    self.hostname = socket.gethostname()
    self.zmq_url= "tcp://%s:%d" % zmq
    self.graphite_address = graphite
    self.database = database
    self.nodes = None
    self.rebuildDict()
    self._connectZMQ()
    self._connectGraphite()

  def rebuildDict(self, signum=False, frame=None):
    if signum:
        logging.info( 'Got SIGHUP' )
    nodes = {}
    self._incrementStats( '*.db_rebuilds' )
    try:
      db = sqlite3.connect( self.database )
      cursor = db.cursor()
      sql = "SELECT ipv4_addr, name FROM host"
      for ipv4, name in cursor.execute( sql ).fetchall():
        nodes[ipv4] = name
      logging.info( 'Rebuilt internal node dictionary' )
    except Exception as e:
      self._incrementStats('*.db_rebuild_errors')
      logging.error( 'Could not rebuild node dictionary from database file: %s, %s',
          self.database, e )
      if not self.nodes:
        sys.exit(1)
      return
    self.nodes = nodes
    
  def _incrementStats(self, key):
    self.total_stats[key] += 1
    self.stats[key] += 1

  def dumper(self):
    while True:
      time.sleep(7)
      try:

        f = open('zmq2graphite.stats', 'w')
        f.write( json.dumps( self.total_stats ) )
        f.close()
        logging.debug( 'Dumped stats to "zmq2graphite.stats"' )

        # We use the self.graphite_counters list to send explicit zero when the
        # counter is zero.
        for metric in self.graphite_counters:
          self._sendToGraphite( 'dh.quick.zmq2graphite.%s.%s' % (
            self.hostname, metric ), self.stats['*.%s' % metric],
            int( time.time() ) )

        self.stats = collections.Counter()
        self._incrementStats('*.dumps')
      except Exception as e:
        self._incrementStats('*.dump_errors')
        logging.error( 'Could not dump stats to "zmq2graphite.stats": %s', e )

  def _connectZMQ(self):
    try:
      self.zmq_context = zmq.Context()
      self.zmq_socket = self.zmq_context.socket( zmq.SUB )
      self.zmq_socket.setsockopt( zmq.SUBSCRIBE, '' )
      self.zmq_socket.bind( self.zmq_url  )
    except Exception as e:
      logging.error( 'Could not bind to ZMQ URL: %s, %s', self.zmq_url, e )
      sys.exit(1)

  def _connectGraphite(self):
    while True:
      try:
        self._incrementStats('*.graphite_connects')
        self.graphite_socket = socket.socket()
        self.graphite_socket.connect( self.graphite_address )
        return
      except Exception as e:
        logging.error ( 'Could not connect to Graphite on %s, port %d, %s',
          self.graphite_address[0], self.graphite_address[1], e )
        time.sleep(3)

  def _sendToGraphite(self, path, value, ts):
    graphite_msg = [( path, ( ts, value ) )]
    logging.debug( graphite_msg )
    payload = pickle.dumps( graphite_msg )
    header = struct.pack( "!L", len( payload ) )
    self.graphite_socket.send( header + payload )

  def translate(self):
    error_cnt = 0
    while True:
      try:
        logging.debug( 'Waiting for data... (total %d recorded stats)' % (
          len( set( self.stats ) ) ) )

        raw = self.zmq_socket.recv()
        (iid, value, insert_value, ts, element_size, name_length) = struct.unpack( '4QII', raw[0:40])

        oid_payload = raw[40:40+name_length*element_size]
        oid = struct.unpack('%d%s' % (name_length, 'Q' if element_size == 8 else 'I'), oid_payload)
        name = '.'.join(map(str, oid))

        hostname = self.nodes.get( iid, 'unknown' )
        hostname = '.'.join( reversed( hostname.split('.') ) )
        fullpath = 'dh.%s.%s' % ( hostname, name )
        if not fullpath in self.total_stats:
          self._incrementStats( '*.unique_objects' )
        self._incrementStats( fullpath )
        self._incrementStats( '*.inserts' )

        self._sendToGraphite( fullpath, insert_value, ts )
        error_cnt = 0
      except Exception as e:
        self._incrementStats( '*.exceptions' )
        error_cnt += 1
        logging.error( 'Error while handling packet: %s', e )
        if error_cnt > 10:
          logging.error( 'Reconnecting to Graphite due to too many errors' )
          self._connectGraphite()
          error_cnt = 0

def main():
  if len( sys.argv ) < 2:
    print "Usage: %s DATABASEFILE" % sys.argv[0]
  db_file = sys.argv[1]
  if not os.path.exists( db_file ):
    print "No such file: %s" % db_file
    sys.exit( 1 )

  translator = zmq2graphite( database=db_file )
  signal.signal( signal.SIGHUP, translator.rebuildDict )

  dumper = threading.Thread( target=translator.dumper )
  dumper.daemon = True
  dumper.start()

  translator.translate()

if __name__ == '__main__':
  main()

