import abc
import collections


BaseRunInformation = collections.namedtuple('RunInformation',
        ('tag', 'debug', 'trace'))

AnnotatedResultEntry = collections.namedtuple('AnnotatedResultEntry',
    ('data', 'mib', 'obj', 'index', 'labels'))

Statistics = collections.namedtuple('Statistics', ('timeouts', 'errors'))


class RunInformation(BaseRunInformation):
  def __new__(cls, tag='', debug=None, trace=None):
    if debug is None:
      debug = {}
    if trace is None:
      trace = {}
    self = super(RunInformation, cls).__new__(cls, tag, debug, trace)
    return self


class Action(object):
  """Base class that represents an Action that moves between stages."""
  __metadata__ = abc.ABCMeta

  @classmethod
  def get_queue(cls, instance):
    return 'dhmon:snmp:{0}:{1}'.format(instance, cls.__name__)

  @abc.abstractmethod
  def do(self, stage, run):
    """Execute an action, return a list of result actions."""
    pass


class Trigger(Action):
  """Trigger the supervisor to start a new poll."""

  def do(self, stage, run):
    return stage.do_trigger(run)

  def __eq__(self, other):
    return isinstance(other, self.__class__)


class SnmpWalk(Action):
  """Walk over a given device."""

  def __init__(self, target):
    self.target = target

  def do(self, stage, run):
    return stage.do_snmp_walk(run, self.target)

  def __eq__(self, other):
    if not isinstance(other, self.__class__):
      return False
    return self.target == other.target


class Summary(Action):
  """Summary for this poll round.

  Used to calculate when a round is over to get queue statistics.
  """

  def __init__(self, timestamp, targets):
    """
    Args:
      timestamp: (float) unix timestamp used to group targets in the round.
      targets: (int) number of targets in this round.
    """
    self.timestamp = timestamp
    self.targets = targets

  def do(self, stage, run):
    return stage.do_summary(run, self.timestamp, self.targets)

  def __eq__(self, other):
    if not isinstance(other, self.__class__):
      return False
    return self.targets == other.targets and self.timestamp == other.timestamp


class Result(Action):
  """One target's Exporter set."""

  def __init__(self, target, results, stats):
    self.target = target
    self.results = results
    self.stats = stats

  def do(self, stage, run):
    return stage.do_result(run, self.target, self.results, self.stats)

  def __eq__(self, other):
    if not isinstance(other, self.__class__):
      return False
    return (
        self.target == other.target and self.results == other.results and
        self.stats == other.stats)


class AnnotatedResult(Result):
  """Same as Result but now the data is annotated."""
  pass
