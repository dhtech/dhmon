#!/bin/bash

now=$(date +"%s")

IFS='
'
for row in $(stat --printf "%n %Y %s\n" /var/log/dh/*/all.log)
do
  filename=$(basename $(dirname $(echo $row | awk '{print $1}')))
  stamp=$(echo $row | awk '{print $2}')
  size=$(echo $row | awk '{print $3}')
  if ! echo "${filename}" | grep '\.' -q; then
    # TODO(bluecmd): we probably want full fqdn from servers instead
    host="$filename.event.dreamhack.se"
  else
    host="$filename"
  fi
  echo "syslog_log_bytes{host=\"$host\"} ${size}   $(($now * 1000))"
  echo "syslog_log_updated{host=\"$host\"} ${stamp} $(($now * 1000))"
done
