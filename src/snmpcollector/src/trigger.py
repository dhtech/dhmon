#!/usr/bin/env python2
import stage
import sys
import time
import actions


class Trigger(object):
  pass


if __name__ == '__main__':
  tag = sys.argv[1] if len(sys.argv) > 1 else '',
  sys.argv = (sys.argv[0],)
  stage = stage.Stage(Trigger())
  stage.startup()
  run = actions.RunInformation(
          tag, debug={}, trace={'Trigger': (time.time(), time.time())})
  stage.push(actions.Trigger(), run, expire=5000)
