#!/usr/env python
import redis

class NondirectionalEdge(object):
  def __init__(self, a, b, weight):
    self.a = a
    self.b = b
    self.weight = weight

  def __eq__(self, other):
    # TODO(bluecmd): we don't consider different weights here
    return (self.a == other.a and self.b == other.b) or (
        self.a == other.b and self.b == other.a)

  def __hash__(self):
    return hash(str(sorted([self.a, self.b])))

class NetworkGrapher(object):

  def __init__(self, nodes, neighbor_func):
    self.nodes = nodes
    self._neighbor_func = neighbor_func

  def _find_edges(self, node):
    neighbors = set()
    for neighbor, interface, weight in self._neighbor_func(node):
      neighbors.add(neighbor)
      yield (node, neighbor, interface, weight)
    self.visited.add(node)
    for neighbor in filter(lambda x: x not in self.visited, neighbors):
      self._find_edges(neighbor)

  def build(self):
    self.visited = set()
    self.edges = set()
    for root in self.nodes:
      for (a, b, interface, weight) in self._find_edges(root):
        self.edges.add((a, b, interface, weight))

if __name__ == '__main__':
  r = redis.StrictRedis(host='localhost', port=6379, db=1)
  # Find all nodes by looking for cdpCacheDeviceId
  nodes = [
      key.split(':')[0] for key in r.keys('*:1.3.6.1.4.1.9.9.23.1.2.1.1.6.*.1')]
  print '%d nodes found' % len(nodes)

  def resolver(node):
    return map(r.get, r.keys('%s:1.3.6.1.4.1.9.9.23.1.2.1.1.6.*.1' % node))

  grapher = NetworkGrapher(nodes, resolver)
  grapher.build()
  for edge in grapher.edges:
    print '%s -- %s' % (edge.a, edge.b)
