import flask
import json
import sqlite3
import time
import urllib
import urllib2


DB_FILE = '/etc/ipplan.db'

app = flask.Flask(__name__)


def prometheus(query):
  host = 'http://localhost:9090'
  url = '{host}/prometheus/api/v1/query?query={query}&time={time}'

  o = urllib2.urlopen(url.format(
    query=urllib.quote(query), time=int(time.time()), host=host))
  return o.read()


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
  return "{}"


@app.route('/rancid.status')
def rancid_status():
  return "{}"


@app.route('/dhcp.status')
def dhcp_status():
  return "{}"


@app.route('/switch.version')
def switch_version():
  return "{}"


@app.route('/switch.interfaces')
def switch_interfaces():
  return "{}"


@app.route('/switch.vlans')
def switch_vlans():
  return "{}"


@app.route('/switch.model')
def switch_model():
  return "{}"


@app.route('/switch.status')
def switch_status():
  return "{}"


if __name__ == '__main__':
  app.run(debug=True)

