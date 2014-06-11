#!/usr/bin/env python
import daemonize
import datetime
import dhmon
import shlex
import subprocess
import sys
import syslog
import time
import yaml


if len(sys.argv) != 3:
    print '%s: config daemon_id' % sys.argv[0]
    sys.exit(0)

config = yaml.load(file(sys.argv[1], 'r'))

PERIOD = config['period']
DAEMONS = int(config['number_of_daemons'])
ID = int(sys.argv[2])
OFFSET = (PERIOD / DAEMONS) * ID

def execute():
    processes = {}
    for script in config['scripts']:
        args = shlex.split(script)
	syslog.syslog(syslog.LOG_DEBUG, 'Running "%s"' % script)
        processes[script] = subprocess.Popen(args)

    for cmdline, p in processes.iteritems():
        p.wait()
        if p.returncode != 0:
            syslog.syslog(syslog.LOG_WARNING,
                    'Process "%s" exited with error code %d' % (
                        cmdline, p.returncode))

def new_cycle(jitter):
    execute()

    now = (int(time.time() * 1000) - OFFSET)
    offset = now % PERIOD
    elapsed = offset - jitter
    if offset > int(float(PERIOD) * 0.9):
        syslog.syslog(syslog.LOG_CRIT,
                'Job dispatch took more than 90% of the period, %d ms spent' % (
                    elapsed))
    dhmon.metric('dhmon.launcher.jitter', jitter)
    dhmon.metric('dhmon.launcher.elapsed', elapsed)
    return elapsed

def main():
    previous_cycle = 0
    start_up = True
    while True:
        # Calculate our local 'now' with offset for our daemon index.
        now = (int(time.time() * 1000) - OFFSET)

        cycle = now / PERIOD
        jitter = now % PERIOD
        elapsed = 0
        if cycle != previous_cycle and not start_up:
            if jitter > 10000:
                syslog.syslog(syslog.LOG_CRIT,
                        'High jitter in job dispatcher, %d ms behind' % jitter)
            elapsed = new_cycle(jitter)

        time.sleep(float(min(PERIOD - elapsed - jitter, 1000)) / 1000)
        previous_cycle = cycle
        start_up = False

daemon = daemonize.Daemonize(app="dhmon-launcher", pid=config['pid'],
        action=main)
daemon.start()
