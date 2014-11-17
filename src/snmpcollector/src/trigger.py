#!/usr/bin/env python2
import stage
import supervisor


class Trigger(stage.Stage):

  def __init__(self):
    super(Trigger, self).__init__('trigger', result_queue='trigger')


if __name__ == '__main__':
  stage = Trigger()
  stage.startup()
  stage.push(supervisor.TriggerAction())
