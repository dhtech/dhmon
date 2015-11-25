import collections
import flask
import json
import sqlite3
import time
import urllib
import urllib2


DB_FILE = '/etc/ipplan.db'
CACHE_TIME = 10

app = flask.Flask(__name__)
prometheus_cache = {}


def prometheus(query):
  if query in prometheus_cache:
    result, expire = prometheus_cache[query]
    if expire > time.time():
      return result
  host = 'http://localhost:9090'
  url = '{host}/prometheus/api/v1/query?query={query}&time={time}'

  o = urllib2.urlopen(url.format(
    query=urllib.quote(query), time=int(time.time()), host=host))

  res = o.read()
  prometheus_cache[query] = (res, time.time() + CACHE_TIME)
  return res


@app.route('/event.hosts')
def event_hosts():
  conn = sqlite3.connect(DB_FILE)
  c = conn.cursor()
  c.execute('SELECT h.node_id, h.name, n.name '
            'FROM host h, network n WHERE n.node_id = h.network_id')

  nodes = {}
  for node_id, node, network in c.fetchall():
    if not network.startswith('EVENT@'):
      continue
    c.execute('SELECT name, value FROM option WHERE node_id = ?', (node_id, ))
    options = {}
    for name, value in c:
      options[name] = value
    nodes[node] = {
      'options': options
    }
  return json.dumps(nodes)


@app.route('/ping.status')
def ping_status():
  result = json.loads(prometheus('changes(icmp_rtt_seconds_sum[1m])'))
  ts = result['data']['result']

  nodes = {x['metric']['host']: 60-int(x['value'][1]) for x in ts}
  return json.dumps(nodes)


@app.route('/snmp.saves')
def snmp_saves():
  result = json.loads(prometheus('max_over_time(snmp_oid_count[5m])'))
  ts = result['data']['result']

  nodes = {x['metric']['device']: {'metrics': int(x['value'][1])} for x in ts}
  return json.dumps(nodes)


@app.route('/snmp.errors')
def snmp_errors():
  result = json.loads(prometheus(
    'increase(snmp_error_count[5m]) + increase(snmp_timeout_count[5m]) > 0'))
  ts = result['data']['result']

  nodes = {x['metric']['device']: {
    'error': 'Timeout or Auth Error'} for x in ts}
  return json.dumps(nodes)


@app.route('/syslog.status')
def syslog_status():
  result = json.loads(prometheus('max_over_time(syslog_log_bytes[5m])'))
  ts = result['data']['result']
  nodes = {x['metric']['host']: {'size': int(x['value'][1])} for x in ts}
  return json.dumps(nodes)


@app.route('/rancid.status')
def rancid_status():
  result = json.loads(prometheus('max_over_time(rancid_config_bytes[5m])'))
  ts = result['data']['result']
  nodes = {x['metric']['host']: {'size': int(x['value'][1])} for x in ts}
  return json.dumps(nodes)


@app.route('/dhcp.status')
def dhcp_status():
  result = json.loads(prometheus('dhcp_leases_current_count'))
  dhcp_usage = result['data']['result']
  result = json.loads(prometheus('dhcp_leases_max_count'))
  dhcp_max = {
      x['metric']['network']: x['value'][1]
      for x in result['data']['result']}

  networks = {}
  for data in dhcp_usage:
    domain, network = data['metric']['network'].split('@', 2)
    vlan = data['metric']['vlan']
    networks[network] = {
        'domain': domain,
        'vlan': vlan,
        'usage': data['value'][1],
        'max': dhcp_max[data['metric']['network']]
    }
  return json.dumps(networks)


@app.route('/switch.version')
def switch_version():
  return "{}"


def interface_variable(variable, key, nodes, bool_value=None):
  result = json.loads(prometheus(variable + '{layer="access"}'))
  ts = result['data']['result']
  for data in ts:
    host = data['metric']['device']
    iface = data['metric']['interface']
    if 'enum' in data['metric']:
      value = data['metric']['enum']
    else:
      value = data['value'][1]
    if bool_value is not None:
      value = (bool_value == value)
    nodes[host][iface][key] = value
    nodes[host][iface]['lastoid'] = data['metric']['index']


@app.route('/switch.interfaces')
def switch_interfaces():
  nodes = collections.defaultdict(lambda: collections.defaultdict(dict))
  interface_variable('ifOperStatus', 'status', nodes)
  interface_variable('vlanTrunkPortDynamicStatus', 'trunk', nodes, 'trunking')
  interface_variable('ifOutErrors', 'errors_out', nodes)
  interface_variable('ifInErrors', 'errors_in', nodes)
  interface_variable('ifAdminStatus', 'admin', nodes)
  interface_variable('ifHighSpeed', 'speed', nodes)
  interface_variable('dot1dStpPortState', 'stp', nodes)
  return json.dumps(nodes)


@app.route('/switch.vlans')
def switch_vlans():
  result = json.loads(prometheus('changes(vtpVlanState[5m])'))
  ts = result['data']['result']

  nodes = collections.defaultdict(dict)
  for data in ts:
    host = data['metric']['device']
    vlan = data['metric']['index'].split('.', 1)[1]
    nodes[host][vlan] = 1
  return json.dumps(nodes)


@app.route('/switch.model')
def switch_model():
  result = json.loads(prometheus(
    'changes(entPhysicalModelName{index="1"}[5m])'))
  ts = result['data']['result']

  nodes = {x['metric']['device']: {'model': x['metric']['value']} for x in ts}
  return json.dumps(nodes)


if __name__ == '__main__':
  app.run(debug=True, threaded=True)

