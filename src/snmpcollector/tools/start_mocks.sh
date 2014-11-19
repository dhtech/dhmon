#!/bin/bash
# This script will set up a new interface for 10.0.0.0/10 and start
# one snmp-agent per switch in the access and dist layer.

set -e

cd $(dirname $0)

pkill -f 'ruby snmp-agent/tableswitch.rb' || true

ip link del dhmon0 2>/dev/null || true
ip link add dhmon0 type dummy
ip addr add 10.0.0.0/10 dev dhmon0

for row in $(sqlite3 /etc/ipplan.db "SELECT h.name, h.ipv4_addr_txt
  FROM host h, option o WHERE o.node_id = h.node_id AND o.name = 'layer'
  AND (o.value = 'dist' OR o.value = 'access')")
do
  sw=$(echo $row | cut -f 1 -d '|')
  ip=$(echo $row | cut -f 2 -d '|')
  sed -i "/^$ip/d" /etc/hosts
  echo "$ip $sw" >> /etc/hosts
  ip addr add $ip/10 dev dhmon0
  screen -dmS mocksw-$sw ruby snmp-agent/tableswitch.rb $ip
  echo "Started $sw"
done

ip link set up dev dhmon0
