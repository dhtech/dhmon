import abc


class Action(object):
  """Base class that represents an Action that moves between stages."""
  __metadata__ = abc.ABCMeta

  @classmethod
  def get_queue(cls):
    return 'dhmon:snmp:' + cls.__class__.__name__

  @abc.abstractmethod
  def do(self, stage):
    """Execute an action, return a list of result actions."""
    pass


class Trigger(Action):
  """Trigger the supervisor to start a new poll."""

  def do(self, stage):
    return stage.do_trigger()


class SnmpWalk(Action):
  """Walk over a given device."""

  def __init__(self, target):
    self.target = target

  def do(self, stage):
    return stage.do_snmp_walk(self.target)


class Result(Action):
  """One target's Exporter set."""

  def __init__(self, target, results):
    self.target = target
    self.results = results

  def do(self, stage):
    return stage.do_result(self.target, self.results)


class AnnotatedResult(Result):
  """Same as Result but now the data is annotated."""
  pass
