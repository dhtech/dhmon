dhmon
=====

Awesome monitoring system for DreamHack

See the Wiki https://github.com/dhtech/dhmon/wiki for latest scratch notes.

## Products

dhmon consists of a number of smaller products:

 - **snmpcollector** The SNMP collection daemons
 - **pinger** RTT statistics collector
 - **analytics** API backend to access processed statistics

## Installation

Install the Debian packages for the products you want.

## Building Debian packages

You need to have `setuptools` for pypy installed
    wget https://bootstrap.pypa.io/ez_setup.py -O - | sudo pypy

Build the packages
    # Create a new snapshot version
    gbp dch --snapshot --auto
    
    # Clean
    rm ../dhmon_*.orig.tar.gz
    
    # Build
    gbp buildpackage --git-upstream-tree=master --git-submodules \
        --git-ignore-new --git-builder='debuild -i -I -k28B92277'

