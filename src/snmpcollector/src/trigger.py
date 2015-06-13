#!/usr/bin/env python2
import stage
import actions


class Trigger(stage.Stage):
  pass


if __name__ == '__main__':
  stage = Trigger()
  stage.startup()
  stage.push(actions.Trigger(), expire=5000)
