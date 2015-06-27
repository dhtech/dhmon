#!/usr/bin/env python2
import stage
import sys
import time
import actions


class Trigger(object):

  def trigger(self, tag):
    # We do not support any arguments for this helper
    sys.argv = (sys.argv[0],)
    trigger = stage.Stage(self)
    trigger.startup()
    run = actions.RunInformation(
            tag, debug={}, trace={'Trigger': (time.time(), time.time())})
    trigger.push(actions.Trigger(), run, expire=5000)


if __name__ == '__main__':
  tag = sys.argv[1] if len(sys.argv) > 1 else '',
  Trigger().trigger(tag)
