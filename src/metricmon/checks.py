#!/usr/bin/env python
import collections
import inspect
import json
import urllib
import urllib2
import sys

OK = 0
WARNING = 1
CRITICAL = 2
UNKNOWN = 3

# ifOperStatus
LINK_UP = 1

def latest(points):
  return points[-1][0]

class Checks(object):

  def __init__(self):
    self._results = None
    self._active_events = set()

  def run(self):
    self._results = []

    # TODO(bluecmd): threading pool?
    # Add your metric here
    self.accessIfSpeed('15min', 'min')
    self.accessUplinkTraffic('5min')
    self.accessLinkDown('5min')

    # Clear events that are not firing anymore
    current_events = set()
    for target, check, _, _ in self._results:
      event = (target, check)
      current_events.add(event)

    non_firing = self._active_events - current_events
    for target, check in non_firing:
      self._results.append((target, check, OK, 'Metric returned to normal'))

    print 'Events that appeared: ', current_events - self._active_events
    print 'Events that stopped: ', non_firing

    self._active_events = current_events
    return self._results

  def _get(self, time, *targets):
    query = {}
    query['format'] = 'json'
    query['from'] = '-%s' % time
    query['until'] = '-1min'
    aliased_targets = ["aliasSub(%s,'^.*dh\.(.*?)\.[0-9\.]*\.([0-9]+).*$','%s|\\1|\\2')" % (
      target, target_id) for target_id, target in enumerate(targets)]

    url = 'http://localhost:8011/render/?%s&%s' % (
        urllib.urlencode(query),
        '&'.join([urllib.urlencode({'target': target}) for target in aliased_targets]))
    data = urllib2.urlopen(url)
    retdict = collections.defaultdict(dict)
    for target in json.loads(data.read()):
      target_id, target_name, instance = target['target'].split('|', 2)
      retdict[int(target_id)][(target_name, instance)] = target['datapoints']
    return [retdict[target_id] for target_id in range(0, len(targets))]

  def _targetToDns(self, target):
    return '.'.join(reversed(target.split('.')))

  def _warning(self, target, instance, message):
    check = inspect.stack()[1][3]
    self._results.append(((self._targetToDns(target), instance),
      check, WARNING, message))

  def _critical(self, target, instance, message):
    check = inspect.stack()[1][3]
    self._results.append(((self._targetToDns(target), instance),
      check, CRITICAL, message))

  def accessIfSpeed(self, time, method):
    # ifHighSpeed
    oid = '1.3.6.1.2.1.31.1.1.1.15.*'
    link_speed_query = (
      "summarize(dh.local.dreamhack.event.*.%s,'%s','%s',true)" % (
        oid, time, method))

    status_oid  = '1.3.6.1.2.1.2.2.1.8.*'
    status_query = (
      "summarize(dh.local.dreamhack.event.*.%s,'%s','max',true)" % (
        status_oid, time))

    (link_speed, status) = self._get(time, link_speed_query, status_query)

    if method == 'avg' or method == 'min':
      for (target, instance), data in link_speed.iteritems():
        if (int(latest(status[(target,instance)])) == LINK_UP 
            and latest(data) < 1000):
          self._warning(target, instance, 'Interface slower than 1 Gbps, is %d Mbps' % (
            latest(data),))

  def accessUplinkTraffic(self, time):
    # ifHcInOctets
    in_oid  = '1.3.6.1.2.1.31.1.1.1.6.*'
    # ifHcOutOctets
    out_oid = '1.3.6.1.2.1.31.1.1.1.10.*'
    # ifHighSpeed
    speed_oid = '1.3.6.1.2.1.31.1.1.1.15.*'

    in_query = (
      "summarize(scale(dh.local.dreamhack.event.*.%s,0.033),'%s','avg',true)" % (
        in_oid, time))

    out_query = (
      "summarize(scale(dh.local.dreamhack.event.*.%s,0.033),'%s','avg',true)" % (
        out_oid, time))

    speed_query = (
      "summarize(dh.local.dreamhack.event.*.%s,'%s','max',true)" % (
        speed_oid, time))

    (traffic_in, traffic_out, if_speed) = self._get(
        time, in_query, out_query, speed_query)

    for (target, instance), data in traffic_in.iteritems():
      # traffic is in Mbits/s
      in_traffic = latest(data) / 10**6 * 8
      out_traffic = latest(traffic_out[(target, instance)]) / 10**6 * 8
      speed = latest(if_speed[(target, instance)])
      in_utilization = float(in_traffic)/speed
      out_utilization = float(out_traffic)/speed
      max_utilization = max(in_utilization, out_utilization)
      if max_utilization > 0.9:
        self._critical(target, instance, 'Traffic level on interface extreme, '
            'is %d%% (%d Mbit/s) in %d%% (%d Mbit/s) out' % (
              in_utilization*100, in_traffic, out_utilization*100, out_traffic))
      elif max_utilization > 0.7:
        self._warning(target, instance, 'Traffic level on interface high, '
            'is %d%% (%d Mbit/s) in %d%% (%d Mbit/s) out' % (
              in_utilization*100, in_traffic, out_utilization*100, out_traffic))

  def accessLinkDown(self, time):
    # ifOperStatus
    oid  = '1.3.6.1.2.1.2.2.1.8.*'
    query = (
      "summarize(dh.local.dreamhack.event.*.%s,'%s','max',true)" % (
        oid, time))

    (status, ) = self._get(time, query)

    for (target, instance), data in status.iteritems():
      # FIXME: read ipplan to detect switches we care about
      # read redis to check the description if this is an uplink.
      if target.endswith('bc-office'):
        continue
      if int(latest(data)) != LINK_UP:
        self._warning(target, instance, 'Interface down')
 
if __name__ == '__main__':
  c = Checks()
  c._results = []
  if len(sys.argv) == 1:
    print c.run()
  else:
    getattr(c, sys.argv[1])(*sys.argv[2:])
    print c._results

