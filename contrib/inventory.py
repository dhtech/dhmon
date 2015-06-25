#!/usr/bin/env python2
# Script to list inventory with serial numbers from SNMP.
# TODO(bluecmd): Currently only reads from a JSON dump file:
# python inventory.py host\:d-center-st.event.dreamhack.local.lst
#
# Output example:
#   Root
#    c3xxx Stack (FOC1842U0JZ)
#     WS-C3850-48P (FCW1842C0SK)
#      Switch 2 - WS-C3850-48P - Power Supply A Container
#       Switch 2 - Power Supply A (DCB1835G08H)
#      Switch 2 - WS-C3850-48P - Power Supply B Container
#      Switch 2 - WS-C3850-48P - Fan 1 Container
#       Switch 2 - WS-C3850-48P - FAN 1
#      Switch 2 - WS-C3850-48P - Fan 2 Container
#       Switch 2 - WS-C3850-48P - FAN 2
#  ... [snip] ...
#       GigabitEthernet1/0/2
#      Switch 1 Slot 1 FRULink Container
#       4x10G Uplink Module (FOC18436FP1)
#        Switch 1 Slot 1 SFP Container 0
#        Switch 1 Slot 1 SFP Container 1
#         SFP-10GBase-LR (VB13450356     )
#        Switch 1 Slot 1 SFP Container 2
#        Switch 1 Slot 1 SFP Container 3

import base64
import collections
import json
import sys

SNMP_entPhysicalDescr = '.1.3.6.1.2.1.47.1.1.1.1.2'
SNMP_entPhysicalContainedIn = '.1.3.6.1.2.1.47.1.1.1.1.4'
SNMP_entPhysicalSerialNum = '.1.3.6.1.2.1.47.1.1.1.1.11'

snmp = collections.defaultdict(dict)
# Tree: Dict index is node ID, list entries are children
inventory = collections.defaultdict(list)

with file(sys.argv[1]) as f:
  for row in f:
    struct = json.loads(row)
    if isinstance(struct, int):
      # Timestamp, skip
      continue

    # Skip non-SNMP values
    if not struct['metric'].startswith('snmp.1'):
      continue

    # Skip VLAN aware contexts
    if '@' in struct['metric']:
      continue

    # Decode value
    value = struct['value']
    if isinstance(value, int):
      pass
    elif value.startswith('OCTETSTR'):
      try:
        value = base64.b64decode(value.split(':', 1)[1]).decode()
      except UnicodeDecodeError:
        # Ignore MAC addresses and stuff like that
        continue
    else:
      # Ignore unknown metric
      continue

    oid = struct['metric'][4:]
    root, lastoid = oid.rsplit('.', 1)
    snmp[root][int(lastoid)] = value

# Walk the inventory tree
for oid, value in snmp[SNMP_entPhysicalContainedIn].iteritems():
  inventory[value].append(oid)


def get_product(lastoid):
  """Given a last OID, return the human readable 'Product name (S/N)'"""
  if lastoid == 0:
    return 'Root'
  # TODO(bluecmd): Kill global variable
  model = snmp[SNMP_entPhysicalDescr][lastoid]
  serial = snmp[SNMP_entPhysicalSerialNum][lastoid]
  if serial:
    return '%s (%s)' % (model, serial)
  return model


def print_inventory(inventory, idx, level=0):
  """Recursively travel through the inventory database and print it"""
  print ' ' * level, get_product(idx)
  for child in inventory[idx]:
    print_inventory(inventory, child, level+1)

# Print inventory, start with root
print_inventory(inventory, 0)
