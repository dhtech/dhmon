import logging
import time
import yaml

# SNMP collector configuration file
CONFIG_FILENAME = '/etc/snmpcollector.yaml'

# How long to keep the configuration structure in memory before refreshing it
CONFIG_CACHE = 60


class Config(object):

  def __init__(self):
    self.incarnation = 0
    self._config = None
    self.timestamp = 0

  def load(filename=CONFIG_FILENAME):
    with file(CONFIG_FILENAME, 'r') as f:
      new_config = yaml.load(f)
    return new_config

  @property
  def config(self):
    if self.timestamp + CONFIG_CACHE > time.time():
      return self._config
    new_config = None
    try:
      new_config = self.load() or dict()
      if new_config == self._config:
        return self._config
    except Exception:
      logging.exception('Exception while reading new config, ignoring')
      return self._config

    self.incarnation += 1
    self.timestamp = time.time()
    self._config = new_config
    return new_config

  def refresh(self):
    self.timestamp = 0


_config_object = Config()


def get(*path):
  ret = _config_object.config
  for element in path:
    ret = ret.get(element, None)
    if not ret:
      return None

  return ret


def incarnation():
  return _config_object.incarnation


def refresh():
  _config_object.refresh()
