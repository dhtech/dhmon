import mock
import unittest
import yaml

import config


class TestConfig(unittest.TestCase):

  @mock.patch('time.time')
  @mock.patch('config.Config.load')
  def testConfig(self, mock_config, mock_time):
    mock_time.return_value = 1234
    mock_config.return_value = yaml.load("""
ipplan: /etc/ipplan.db
domain: event
snmp:
  access:
    version: 2
    community: REMOVED
    port: 161
""")
    # First access should load the cache but only then
    self.assertEqual(config.get('ipplan'), '/etc/ipplan.db')
    self.assertEqual(config.get('snmp', 'access', 'version'), 2)
    self.assertEqual(config._config_object.incarnation, 1)
    self.assertEqual(mock_config.call_count, 1)

    # Advance the clock to have the cache refresh
    mock_time.return_value = 1235 + config.CONFIG_CACHE
    self.assertEqual(config.get('snmp', 'access', 'version'), 2)
    self.assertEqual(config._config_object.incarnation, 1)
    self.assertEqual(mock_config.call_count, 2)

    # Try a different config
    mock_config.return_value = yaml.load("""
snmp:
  access:
    version: 3
""")

    # See so the config updated and that we got a new incarnation number
    mock_time.return_value = 1236 + config.CONFIG_CACHE*2
    self.assertEqual(config.get('snmp', 'access', 'version'), 3)
    self.assertEqual(config._config_object.incarnation, 2)
    self.assertEqual(mock_config.call_count, 3)


def main():
  unittest.main()


if __name__ == '__main__':
  main()
