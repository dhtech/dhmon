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
        raw = self.zmq_socket.recv()
        (iid, value, insert_value, ts, element_size, name_length) = struct.unpack( '4QII', raw[0:40])

        oid_payload = raw[40:40+name_length*element_size]
        oid = struct.unpack('%d%s' % (name_length, 'Q' if element_size == 8 else 'I'), oid_payload)
        name = '.'.join(map(str, oid))

        # FIXME Ugly
        id_to_path = { 
            1 : 'dh.server.monserver',
            2 : 'dh.server.birdjesus',
        }

        graphite_msg = [( '%s.%s' % ( id_to_path.get( iid, 'null' ), name ), ( ts, insert_value ) )]
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

