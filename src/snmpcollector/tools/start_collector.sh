#!/bin/bash -xe
# Test script to start a given number of instances of snmpcollector
# Do not use for production, use init script instead
# Usage: <# of workers> <# of savers>

cd $(dirname $0)/../src/

screen -dmS supervisor ./supervisor.py -d /tmp/dhmon.supervisor.pid

for i in $(seq 1 $1)
do
  screen -dmS worker-$i ./snmp_worker.py -d /tmp/dhmon.worker-$i.pid
done

screen -dmS processor ./result_processor.py -d /tmp/dhmon.processor.pid
for i in $(seq 1 $2)
do
  screen -dmS saver-$i ./result_saver.py -d /tmp/dhmon.saver-$i.pid
done
