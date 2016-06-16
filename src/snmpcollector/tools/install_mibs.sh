#!/bin/sh

set -e

rm -f snmp-mibs-downloader_1.1_all.deb
wget http://ftp.debian.org/debian/pool/non-free/s/snmp-mibs-downloader/snmp-mibs-downloader_1.1_all.deb
dpkg -i snmp-mibs-downloader_1.1_all.deb || apt-get -f install -y
rm -f snmp-mibs-downloader_1.1_all.deb

cat << _EOF_ > /etc/snmp-mibs-downloader/snmp-mibs-downloader.conf
# Master configuarion for mib-downloader
#
BASEDIR=/var/lib/mibs
AUTOLOAD="rfc ianarfc iana cisco"
_EOF_

cat << _EOF_ > /etc/snmp-mibs-downloader/cisco.conf
HOST=ftp://ftp.cisco.com
ARCHIVE=v2.tar.gz
ARCHTYPE=tgz
DIR=pub/mibs/v2/
ARCHDIR=auto/mibs/v2
CONF=ciscolist
DEST=cisco
_EOF_

zcat /usr/share/doc/snmp-mibs-downloader/examples/ciscolist.gz \
  | grep -Ev '(CISCO-802-TAP-MIB|CISCO-IP-TAP-CAPABILITY|CISCO-IP-TAP-MIB|CISCO-SYS-INFO-LOG-MIB|CISCO-TAP2-CAPABILITY|CISCO-TAP2-MIB|CISCO-TAP-MIB|CISCO-USER-CONNECTION-TAP-MIB)' \
  | sudo tee /etc/snmp-mibs-downloader/ciscolist
download-mibs
