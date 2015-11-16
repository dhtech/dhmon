#!/usr/bin/python

import socket
import nflog

for uid, ip, src, dst, proto, sport, dport, dspc, ecn, size in nflog.stream(0):
  print uid, ip, src, dst, proto, sport, dport, dspc, ecn, size
