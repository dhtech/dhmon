import netsnmp

class SnmpTarget(object):

  def __init__(self, host, version, community=None, user=None, auth_proto=None,
      auth=None, priv_proto=None, priv=None, sec_level=None):
    self.host=host
    self.version=version
    self.community=community
    self.user=user
    self.auth_proto=auth_proto
    self.priv_proto=priv_proto
    self.priv=priv
    self.sec_level=sec_level
