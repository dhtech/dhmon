import struct
import sys
import time
import zmq

zmq_context = zmq.Context()
receiver = zmq_context.socket(zmq.SUB)
receiver.setsockopt(zmq.SUBSCRIBE, '')
receiver.connect('tcp://localhost:5561')

sender = zmq_context.socket(zmq.PUB)
sender.connect('tcp://localhost:5560')

# Give the subscriber some time to subscribe
time.sleep(0.1)

sender.send(sys.argv[1], zmq.NOBLOCK)

while True:
  ip, secs, usecs = struct.unpack('16sII', receiver.recv())
  print 'Reply:', ip, (secs*1000.0 + usecs / 1000.0)

