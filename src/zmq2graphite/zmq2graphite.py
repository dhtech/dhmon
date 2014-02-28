import cPickle as pickle
import logging
import socket
import struct
import sys
import threading
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

  def __init__(self, zmq=("*", 5555), graphite=("127.0.0.1", 2004) ):
    self.zmq_url= "tcp://%s:%d" % zmq
    self.graphite_address = graphite
    self._connectZMQ()
    self._connectGraphite()

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
    try:
      self.graphite_socket = socket.socket()
      self.graphite_socket.connect( self.graphite_address )
    except Exception as e:
      logging.error ( 'Could not connect to Graphite on %s, port %d, %s',
        self.graphite_address[0], self.graphite_address[1], e )
      sys.exit(2)

  def translate(self):
    while True:
      error_cnt = 0
      try:
        logging.debug( 'Waiting for data...' )
        raw = self.zmq_socket.recv( 8*3 )
        data = struct.unpack( 'QQQ', raw )

        # FIXME Ugly
        id_to_path = { 
            1 : 'dh.server.monserver',
            2 : 'dh.server.birdjesus',
        }

        graphite_msg = [( id_to_path.get( data[0], 'null' ), ( data[2], data[1] ) )]
        logging.debug( graphite_msg )
        payload = pickle.dumps( graphite_msg )
        header = struct.pack( "!L", len( payload ) )
        self.graphite_socket.send( header + payload )
        error_cnt = 0
      except Exception as e:
        error_cnt += 1
        logging.error( 'Error while handling packet: %s', e )
        if error_cnt > 10:
          logging.error( 'Reconnecting to Graphite due to too many errors' )
          self._connectGraphite()
          error_cnt = 0

def main():
  translator = zmq2graphite()
  translator.translate()

if __name__ == '__main__':
  main()

