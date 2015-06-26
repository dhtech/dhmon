#!/usr/env python
import collections
import weathermap

_map = collections.defaultdict(list)

def build_mock(access=True):
  for i in xrange(1, 19):
    _map['root:%s' % ('w' if i < 10 else 'e')].append(('dist%d' % i, 'eth%d.1' % i, 100))
    _map['root:%s' % ('e' if i < 10 else 'w')].append(('dist%d' % i, 'eth%d.2' % i, 100))
    _map['dist%d' % i] = [('dist%d' % (i - 1 if i%2 else i+1), 'eth0', 10)]

  if access:
    for i in xrange(1, 200):
      _map['access%d' % i] = [('dist%d' % (i % 20), 'gig0', 1)]

def mock_resolver(node):
  for a, b in _map.iteritems():
    if a == node:
      for n in b:
        yield n

def mock_all_nodes():
  for a, b in _map.iteritems():
    for n in b:
      yield n[0]
    yield a

def format_node(node):
  if node.startswith('access'):
    return '', 'point', 'dodgerblue4'
  elif node.startswith('dist'):
    return node, 'hexagon', 'goldenrod'
  elif node.startswith('root'):
    return node, 'circle', 'forestgreen'

if __name__ == '__main__':
  build_mock(access=True)
  nodes = set(mock_all_nodes())
  grapher = weathermap.NetworkGrapher(nodes, mock_resolver)
  grapher.build()
  print 'graph G {'
  print ' ranksep=3.4;'
  print ' ratio=auto;'
  print ' overlap=false;'
  print ' splines=true;'
  print ' splines=true;'
  print ' bgcolor=black;'
  for node in set([x.split(':')[0] for x in nodes]):
    (label, shape, color) = format_node(node)
    print '"%s" [ label="%s",shape="%s",style="filled",fillcolor="%s" ];' % (
        node, label, shape, color)
  for edge in grapher.edges:
    weight = edge[3]
    penwidth = 1
    if weight < 100:
      penwidth = 0.5
    elif weight < 10:
      penwidth = 0.1
    color = int(edge[1][4:]) % 9 + 1
    print '%s -- %s [colorscheme=rdylgn9, weight=%d, color=%s, penwidth=%f]' % (edge[0], edge[1], edge[3], color, penwidth)
  print '}'
