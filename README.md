dhmon
=====

Awesome monitoring system for Dreamhack


Troubleshooting
====

1. Messaging
Check that the queues are running:
https://X/rabbitmq/#/queues

1. NTP
When debugging dhmon, always make sure that time is set correctly.
Weird stuff will happen (data will not appear, inserts will be ignored etc.)
if you do not have the correct time set up.

1. Crashes
Blabalbal. Talk about crashes in launcher, dhmon et al.
status should work on a lot of daemons, but not launcher

To check status:
ls /etc/init.d/dhmon-* | xargs -I{} bash {} status

1. InfluxDB errors
Check for errors in /opt/influxdb/shared/log.txt.
Also a high number of QPS to InfluxDB might overload it.

1. Network rules
Make sure that the daemons can talk both v4 and v6.
Almost all daemons and clients need to talk to RabbitMQ.

1. Syslog
Syslog logs *a lot* of data. Check it and see if you can spot any errors.
Errors should be logged with the ERROR class, so it should be grepable.
