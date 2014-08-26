import collections
import netsnmp

SnmpResult = collections.namedtuple('SnmpResult', ['target', 'results'])
ResultTuple = collections.namedtuple('ResultTuple', ['value', 'type'])

class SnmpTarget(object):

  def __init__(self, host, timestamp, version, community=None, user=None,
      auth_proto=None, auth=None, priv_proto=None, priv=None, sec_level=None,
      port=161):
    self._full_host = "%s:%s" % (host, port)
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

  def _snmp_session(self):
    if self.version == 3:
      return netsnmp.Session(Version=3, DestHost=self._full_host,
        SecName=self.user, SecLevel=self.sec_level,
        AuthProto=self.auth_proto, AuthPass=self.auth,
        PrivProto=self.priv_proto, PrivPass=self.priv,
        UseNumeric=1)
    else:
      return netsnmp.Session(Version=self.version, DestHost=self._full_host,
          Community=self.community, UseNumeric=1)

  def walk(self, oid):
    sess = self._snmp_session()
    ret = {}
    nextoid = oid
    offset = 0
    # Abort the walk when it exits the OID tree we are interested in
    while nextoid.startswith(oid):
      var_list = netsnmp.VarList(netsnmp.Varbind(nextoid, offset))
      sess.getbulk(nonrepeaters=0, maxrepetitions=256, varlist=var_list)
      for result in var_list:
        ret['%s.%s' % (result.tag, int(result.iid))] = ResultTuple(
            result.val, result.type)
      # Continue bulk walk
      offset = int(var_list[-1].iid)
      nextoid = var_list[-1].tag
    return ret

  def get(self, oid):
    var = netsnmp.Varbind(oid)
    var_list = netsnmp.VarList(var)
    sess = self._snmp_session()
    sess.get(var_list)
    return {var.tag: ResultTuple(var.val, var.type)}

  def model(self):
    model = self.get('.1.3.6.1.2.1.47.1.1.1.1.13.1')
    if not model or not model.values().pop().value:
      model = self.get('.1.3.6.1.2.1.47.1.1.1.1.13.1001')
    if not model:
      return None
    return model.values().pop().value
