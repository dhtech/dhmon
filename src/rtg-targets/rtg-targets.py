import json
import netsnmp
import os
import sqlite3
import sys

if len( sys.argv ) < 2:
  print "Usage: %s DATABASEFILE | [community host [host ..]]" % sys.argv[0]
  sys.exit( 0 )

if len( sys.argv ) == 2:
  DB_FILE = sys.argv[1]
  if os.path.isfile(DB_FILE):
    try:
      conn = sqlite3.connect(DB_FILE)
      db = conn.cursor()
    except sqlite3.Error as e:
      print "An error occurred:", e.args[0]
      sys.exit(1)
  else:
    print "No database file found: %s" % DB_FILE
    sys.exit(2)

  sql = "SELECT ipv4_addr, ipv4_addr_txt FROM host WHERE name IN (SELECT name FROM active_switch);"
  switches = db.execute( sql ).fetchall()
  community = 'FIXME'
else:
  switches = [x for x in enumerate(sys.argv[2:])]
  community = sys.argv[1]

with open( 'snmpmap.json', 'r' ) as f:
  snmp_map = json.load( f )

def SwitchModel( ip, community):
  var = netsnmp.Varbind('.1.3.6.1.2.1.47.1.1.1.1.13.1')
  model = netsnmp.snmpget(var, Version=2, DestHost=ip, Community=community)[0]

  if model == None:
    var = netsnmp.Varbind('.1.3.6.1.2.1.47.1.1.1.1.13.1001')
    model = netsnmp.snmpget(var, Version=2, DestHost=ip, Community=community)[0]

  return model


for switch_id, switch in switches:
  model = SwitchModel( switch, community )
  
  object_sets = snmp_map['models'].get( model, None)
  if not object_sets:
    continue
  
  all_objects = []
  for object_set in object_sets:
    objects = snmp_map['objects'].get( object_set, None)
    all_objects.extend( objects.iteritems() )

  for oid, label in all_objects:
    bits = -1 if label[0] != '@' else -2
    print "%s %s %s %s %s %s" % (
        switch, oid, bits, community, label, switch_id )
