import mock
import unittest
import yaml

import annotator
import actions
import config
import snmp


MIB_RESOLVER = {
    '.1.2.3': 'testInteger1',
    '.1.2.4': 'testInteger2',
    '.10.1': 'interfaceString',
    '.10.2': 'aliasString'
}


class MockMibResolver(object):

  def resolve(self, oid):
    key, index = oid.rsplit('.', 1)
    return 'DUMMY-MIB::' + '.'.join((MIB_RESOLVER[key], index))


class TestAnnotator(unittest.TestCase):

  def setUp(self):
    self.logic = annotator.Annotator()
    self.logic._mibresolver = MockMibResolver()
    self.run = actions.RunInformation()

  def createResult(self, results, timeouts=0, errors=0):
    target = snmp.SnmpTarget(
        'test1', '1.2.3.4', 1234, 'access',
        version=2, community='REMOVED', port=161)
    stats = actions.Statistics(timeouts, errors)
    return actions.Result(target, results, stats)

  @mock.patch('config.Config.load')
  def runTest(self, expected_entries, result, config, mock_config):
    mock_config.return_value = yaml.load(config)
    expected_output = [actions.AnnotatedResult(
        result.target, expected_entries, result.stats)]
    output = list(result.do(self.logic, run=self.run))
    if output != expected_output:
      print 'Output is not as expected!'
      print 'Output:'
      for oid, v in output[0].results.iteritems():
        print oid, v
      print 'Expected:'
      for oid, v in expected_output[0].results.iteritems():
        print oid, v
    self.assertEquals(output, expected_output)

  def createResultEntry(self, key, result, **kwargs):
    return {key: actions.AnnotatedResultEntry(
      data=result.results[key], **kwargs)}

  def testSmokeTest(self):
    """Test empty config and empty SNMP result."""
    result = self.createResult(results={})
    expected = {}
    self.runTest(expected, result, '')

  def testResult(self):
    """Test that results are propagated as we want."""
    result = self.createResult(results={
      ('.1.2.4.1', '100'): snmp.ResultTuple('1337', 'INTEGER')})
    expected = {
      ('.1.2.4.1', '100'): actions.AnnotatedResultEntry(
        data=snmp.ResultTuple(value='1337', type='INTEGER'),
        mib='DUMMY-MIB', obj='testInteger2', index='1', labels={'vlan': '100'})
    }
    self.runTest(expected, result, '')

  def testSimpleAnnotation(self):
    """Test simple annotation and VLAN support."""
    config = """
annotator:
  annotations:
    - annotate:
        - .1.2.3
        - .1.2.4
      with:
        interface: .10.1
        alias: .10.2
"""
    result = self.createResult({
      ('.1.2.3.1', None): snmp.ResultTuple('1337', 'INTEGER'),
      ('.1.2.3.3', None): snmp.ResultTuple('1338', 'INTEGER'),
      ('.1.2.4.1', None): snmp.ResultTuple('1339', 'INTEGER'),
      ('.1.2.4.2', None): snmp.ResultTuple('1340', 'GAUGE'),
      ('.1.2.4.1', '100'): snmp.ResultTuple('1339', 'INTEGER'),
    })
    expected = {}
    expected.update(self.createResultEntry(('.1.2.3.1', None), result,
      mib='DUMMY-MIB', obj='testInteger1', index='1', labels={}))
    expected.update(self.createResultEntry(('.1.2.3.3', None), result,
      mib='DUMMY-MIB', obj='testInteger1', index='3', labels={}))
    expected.update(self.createResultEntry(('.1.2.4.1', None), result,
      mib='DUMMY-MIB', obj='testInteger2', index='1', labels={}))
    expected.update(self.createResultEntry(('.1.2.4.2', None), result,
      mib='DUMMY-MIB', obj='testInteger2', index='2', labels={}))
    expected.update(self.createResultEntry(('.1.2.4.1', '100'), result,
      mib='DUMMY-MIB', obj='testInteger2', index='1', labels={'vlan': '100'}))
    self.runTest(expected, result, config)


def main():
  unittest.main()


if __name__ == '__main__':
  main()
