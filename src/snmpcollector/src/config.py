import yaml

config = None

def load(filename):
  with file(filename, 'r') as f:
    global config
    config = yaml.load(f)
