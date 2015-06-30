import binascii
import collections
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
    '.1.2.5': 'testInteger3',
    '.10.1': 'interfaceString',
    '.10.2': 'aliasString',
    '.10.3': 'enumString'
}

ENUMS = collections.defaultdict(dict)
ENUMS['.10.3'] = {'10': 'enumValue'}


def snmpResult(x, type=None):
  # We don't care about the type in the annotator
  if type is None:
    type = 'INTEGER' if isinstance(x, int) else 'OCTETSTR'
  return snmp.ResultTuple(str(x), type)


class MockMibResolver(object):

  def resolve_for_testing(self, oid):
    for key in MIB_RESOLVER:
      if oid.startswith(key + '.'):
        break
    else:
      raise Exception('No MIB RESOLVER defined')

    index = oid[len(key)+1:]
    return ('DUMMY-MIB', MIB_RESOLVER[key], index, ENUMS[key])

  def resolve(self, oid):
    mib, obj, index, enum = self.resolve_for_testing(oid)
    return '%s::%s.%s' % (mib, obj, index), enum


class TestAnnotator(unittest.TestCase):

  def setUp(self):
    self.logic = annotator.Annotator()
    self.mibresolver = MockMibResolver()
    self.logic._mibresolver = self.mibresolver
    self.run = actions.RunInformation()
    config.refresh()

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

  def createResultEntry(self, key, result, labels):
    # mib/objs etc. is tested in testResult so we can assume they are correct
    oid, ctxt = key
    mib, obj, index, _ = self.mibresolver.resolve_for_testing(oid)
    if not ctxt is None:
      labels = dict(labels)
      labels['vlan'] = ctxt
    return {key: actions.AnnotatedResultEntry(
      result.results[key], mib, obj, index, labels)}

  def newExpectedFromResult(self, result):
    # We will most likely just pass through a lot of the results, so create
    # the basic annotated entries and just operate on the edge cases we are
    # testing.
    expected = {}
    for (key, ctxt), value in result.results.iteritems():
      expected.update(self.createResultEntry((key, ctxt), result, {}))
    return expected

  def testSmokeTest(self):
    """Test empty config and empty SNMP result."""
    result = self.createResult(results={})
    expected = {}
    self.runTest(expected, result, '')

  def testResult(self):
    """Test that results are propagated as we want."""
    result = self.createResult(results={
      ('.1.2.4.1', '100'): snmpResult(1337)
    })
    # NOTE(bluecmd): Do *not* use createResultEntry here to make sure the
    # assumptions we're doing in that function are holding.
    expected = {
      ('.1.2.4.1', '100'): actions.AnnotatedResultEntry(
        data=snmpResult(1337), mib='DUMMY-MIB', obj='testInteger2',
        index='1', labels={'vlan': '100'})
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
      ('.1.2.3.1', None): snmpResult(1337),
      ('.1.2.3.3', None): snmpResult(1338),
      ('.1.2.4.1', None): snmpResult(1339),
      ('.1.2.4.3.2', None): snmpResult(1340),
      ('.1.2.4.1', '100'): snmpResult(1339),
      ('.10.1.1', None): snmpResult('interface1'),
      ('.10.1.3.2', None): snmpResult('interface2'),
      ('.10.2.1', None): snmpResult('alias1'),
      ('.10.2.3.2', None): snmpResult('alias2'),
    })
    expected = self.newExpectedFromResult(result)
    expected.update(self.createResultEntry(('.1.2.3.1', None), result,
      {'interface': 'interface1', 'alias': 'alias1'}))
    expected.update(self.createResultEntry(('.1.2.4.1', None), result,
      {'interface': 'interface1', 'alias': 'alias1'}))
    expected.update(self.createResultEntry(('.1.2.4.3.2', None), result,
      {'interface': 'interface2', 'alias': 'alias2'}))
    expected.update(self.createResultEntry(('.1.2.4.1', '100'), result,
      {'interface': 'interface1', 'alias': 'alias1'}))
    self.runTest(expected, result, config)

  def testMultiLevelAnnotation(self):
    """Test multi level annotation."""
    config = """
annotator:
  annotations:
    - annotate:
        - .1.2.3
      with:
        interface: .1.2.4 > .1.2.5 > .10.1
"""
    result = self.createResult({
      ('.1.2.3.1', None): snmpResult(1337),
      ('.1.2.4.1', None): snmpResult(5),
      ('.1.2.5.5', None): snmpResult(3),
      ('.10.1.3', None): snmpResult('correct'),
    })
    expected = self.newExpectedFromResult(result)
    expected.update(self.createResultEntry(('.1.2.3.1', None), result,
      {'interface': 'correct'}))
    self.runTest(expected, result, config)

  def testMultiLevelAnnotationValue(self):
    """Test multi level annotation via value."""
    config = """
annotator:
  annotations:
    - annotate:
        - .1.2.3
      with:
        interface: $.1.2.4 > .1.2.5 > .10.1
"""
    result = self.createResult({
      ('.1.2.3.1337', None): snmpResult(1),
      ('.1.2.4.1', None): snmpResult(5),
      ('.1.2.5.5', None): snmpResult(3),
      ('.10.1.3', None): snmpResult('correct'),
    })
    expected = self.newExpectedFromResult(result)
    expected.update(self.createResultEntry(('.1.2.3.1337', None), result,
      {'interface': 'correct'}))
    self.runTest(expected, result, config)

  def testMultiLevelAnnotationContext(self):
    """Test multi level annotation across contexts."""
    config = """
annotator:
  annotations:
    - annotate:
        - .1.2.3
      with:
        interface: .1.2.4 > .1.2.5 > .10.1
"""
    result = self.createResult({
      ('.1.2.3.1', '100'): snmpResult(1337),
      ('.1.2.4.1', '100'): snmpResult(5),
      ('.1.2.5.5', None): snmpResult(3),
      ('.10.1.3', None): snmpResult('correct'),
    })
    expected = self.newExpectedFromResult(result)
    expected.update(self.createResultEntry(('.1.2.3.1', '100'), result,
      {'interface': 'correct'}))
    self.runTest(expected, result, config)


  def testLabelify(self):
    """Test conversion of strings to values."""
    config = """
annotator:
  labelify:
    - .10.2
"""
    result = self.createResult({
      ('.10.2.1', None): snmpResult('correct'),
      ('.10.2.2', None): snmpResult('\xffabc\xff '),
      ('.10.2.3', None): snmpResult(''),
      ('.10.2.4', None): snmpResult(2),
    })
    identities = self.createResult({
      ('.10.2.1', None): snmpResult('NaN', 'ANNOTATED'),
      ('.10.2.2', None): snmpResult('NaN', 'ANNOTATED'),
    })
    expected = self.newExpectedFromResult(result)
    expected.update(self.createResultEntry(('.10.2.1', None), identities,
      {'value': 'correct', 'hex': binascii.hexlify('correct')}))
    expected.update(self.createResultEntry(('.10.2.2', None), identities,
      {'value': 'abc', 'hex': binascii.hexlify('\xffabc\xff ')}))
    # Empty strings should not be included
    del expected[('.10.2.3', None)]
    # Only strings are labelified
    del expected[('.10.2.4', None)]
    self.runTest(expected, result, config)

  def testEnums(self):
    """Test conversion of enums to values."""
    result = self.createResult({
      ('.10.3.1', None): snmpResult(10),
    })
    expected = self.newExpectedFromResult(result)
    expected.update(self.createResultEntry(('.10.3.1', None), result,
      {'enum': 'enumValue'}))
    self.runTest(expected, result, '')

  def testEnumsAnnotation(self):
    """Test conversion of enums to values in annotations."""
    config = """
annotator:
  annotations:
    - annotate:
        - .1.2.3
      with:
        thing: .10.3
"""

    result = self.createResult({
      ('.1.2.3.1', None): snmpResult(10),
      ('.10.3.1', None): snmpResult(10),
    })
    expected = self.newExpectedFromResult(result)
    expected.update(self.createResultEntry(('.1.2.3.1', None), result,
      {'thing': 'enumValue'}))
    expected.update(self.createResultEntry(('.10.3.1', None), result,
      {'enum': 'enumValue'}))
    self.runTest(expected, result, config)


def main():
  unittest.main()


if __name__ == '__main__':
  main()
