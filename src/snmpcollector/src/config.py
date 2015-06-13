import logging
import time
import yaml

# SNMP collector configuration file
CONFIG_FILENAME = '/etc/snmpcollector.yaml'

# How long to keep the configuration structure in memory before refreshing it
CONFIG_CACHE = 60

# Which config refresh (that resulted in config change) incarnation
incarnation = 0


_config = None
_timestamp = 0


def refresh():
  global incarnation
  global _config
  global _timestamp

  new_config = None
  try:
    with file(CONFIG_FILENAME, 'r') as f:
      new_config = yaml.load(f)
    if new_config == _config:
      return
  except Exception:
    logging.exception('Exception while reading new config, ignoring')
    return

  incarnation += 1
  _config = new_config
  _timestamp = time.time()

def get(*path):
  if _timestamp + CONFIG_CACHE < time.time():
    refresh()

  ret = _config
  for element in path:
    ret = ret.get(element, None)
    if not ret:
      return None

  return ret
