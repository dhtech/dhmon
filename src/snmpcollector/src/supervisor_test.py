import mock
import unittest
import yaml

import actions
import config
import snmp
import supervisor


CONFIG = """
ipplan: /etc/ipplan.db
domain: event
snmp:
  access:
    version: 2
    community: REMOVED
    port: 161
"""


class TestSuportvisor(unittest.TestCase):

  def setUp(self):
    patcher = mock.patch('time.time')
    self.addCleanup(patcher.stop)
    self.mock_time = patcher.start()
    self.mock_time.return_value = 1234

  @mock.patch('supervisor.Supervisor.fetch_nodes_ipplan')
  @mock.patch('config.Config.load')
  def testHandleTrigger(self, mock_config, mock_fetch_nodes):
    logic = supervisor.Supervisor()
    mock_config.return_value = yaml.load(CONFIG)
    mock_fetch_nodes.return_value = [
        ('test1', '1.2.3.4', 'access'),
        ('test2', '1.2.3.5', 'access')]
    expected_debug = {}

    expected_output = [
        actions.SnmpWalk(snmp.SnmpTarget(
          'test1', '1.2.3.4', 1234, 'access',
          version=2, community='REMOVED', port=161)),
        actions.SnmpWalk(snmp.SnmpTarget(
          'test2', '1.2.3.5', 1234, 'access',
          version=2, community='REMOVED', port=161)),
        actions.Summary(1234, 2)]

    run = actions.RunInformation()
    output = list(actions.Trigger().do(logic, run=run))

    self.assertEqual(run.debug, expected_debug)
    self.assertEqual(len(expected_output), len(output))
    for expected, real in zip(expected_output, output):
      self.assertEqual(real, expected)


def main():
  unittest.main()


if __name__ == '__main__':
  main()
