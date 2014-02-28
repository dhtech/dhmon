#!/bin/sh

(/usr/bin/pgrep -x -u root cron > /dev/null && echo 'Cron is alive') \
  || (echo 'Cron down :('; exit 2)
exit $?
