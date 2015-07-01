#!/usr/bin/env python2
import argparse
import sys
import time

import stage
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
  parser = argparse.ArgumentParser()
  parser.add_argument('tag', nargs='?', default='', help='tag to trigger')
  args = parser.parse_args()
  Trigger().trigger(args.tag)
