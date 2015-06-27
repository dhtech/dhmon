#!/usr/bin/env python2
import stage
import actions


class Trigger(stage.Stage):
  pass


if __name__ == '__main__':
  stage = Trigger()
  stage.startup()
  # TODO(bliecmd): Mark latency and add tag
  debug = {}
  stage.push(actions.Trigger(), actions.RunInformation('', debug), expire=5000)
