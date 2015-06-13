# How it works

snmpcollector is a multi-staged SNMP collection pipeline.
It uses a message queue (RabbitMQ) as a backend between the stages.

Since doing SNMP walks spend a lot of time waiting for the remote party
increasing the number of workers is a good way to scale the system.

The stages are listed below.

## Supervisor

The supervisor listens to a queue called 'trigger' for a TriggerAction.
This event is normally sent by src/trigger.py by some scheduler.

When triggered the supervisor will scan ipplan.db to find all
targets that should be polled. Every device is then passed as
a message to the workers.

## Worker

Multiple workers are listening on the output from the supervisor.
A worker will wait until it receives a SnmpWalkAction which are
dispensed in a load-balancing way to have the load spread across the
different workers.

The worker starts the work by interogating the device to learn
what model it is and construct the OIDs to walk from that fact in addition
to which layer it is on (from ipplan.db).

When the OID list has been constructed it will first walk the global
OIDs and if the device has VLAN aware OIDs it will walk those afterwards.

The raw walk output is then pushed to the next step in the pipeline as a
SaveAction.

## Saver

This is a single instance that reads all the SNMP results and exports
them in a Prometheus compatible way. Most of the work is to parse the
data to get good labels.

# Installation

    apt-get install python-pip python-netsnmp python-pika
    pip install prometheus_client
    cp etc/dhmon.default /etc/defaults/
    cp etc/snmpcollector.yaml /etc/

Use libsnmp30 and python-netsnmp (required for SNMPv3)
Use python-pika >= 0.9.14 (weird framing error otherwise)

# Management

Start:

    sudo /etc/init.d/dhmon-snmpcollector start

Selective restart:

    sudo LIMITRESTART=worker /etc/init.d/dhmon-snmpcollector restart

SNMP configuration and reachability test:

    ./snmptest d01-a.event.dreamhack.local

Configuration is read every minute and reloaded internally if it's different.
