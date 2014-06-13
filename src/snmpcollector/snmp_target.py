import collections
import netsnmp

SnmpResult = collections.namedtuple('SnmpResult', ['target', 'results'])
ResultTuple = collections.namedtuple('ResultTuple', ['value', 'type'])

class SnmpTarget(object):

  def __init__(self, host, timestamp, version, community=None, user=None,
      auth_proto=None, auth=None, priv_proto=None, priv=None, sec_level=None):
    self.host=host
    self.timestamp=timestamp
    self.version=version
    self.community=community
    self.user=user
    self.auth_proto=auth_proto
    self.auth=auth
    self.priv_proto=priv_proto
    self.priv=priv
    self.sec_level=sec_level

  def _snmp_command(self, command, var):
    if self.version == 3:
      return command(var, Version=3, DestHost=self.host,
        SecName=self.user, SecLevel=self.sec_level,
        AuthProto=self.auth_proto, AuthPass=self.auth,
        PrivProto=self.priv_proto, PrivPass=self.priv)
    else:
      return command(var, Version=self.version, DestHost=self.host,
          Community=self.community)

  def walk(self, oid):
    var = netsnmp.VarList(netsnmp.Varbind(oid))
    self._snmp_command(netsnmp.snmpwalk, var)
    ret = {}
    for result in var:
      ret[result.tag] = ResultTuple(result.val, result.type)
    return ret

  def get(self, oid):
    var = netsnmp.Varbind(oid)
    self._snmp_command(netsnmp.snmpget, var)
    return {var.tag: ResultTuple(var.val, var.type)}

  def model(self):
    model = self.get('.1.3.6.1.2.1.47.1.1.1.1.13.1')
    if not model:
      model = self.get('.1.3.6.1.2.1.47.1.1.1.1.13.1001')
    if not model:
      return None
    return model.values().pop().value
