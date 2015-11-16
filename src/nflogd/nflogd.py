#!/usr/bin/python

import socket
import nflog

for i in nflog.stream(0):
  print i
