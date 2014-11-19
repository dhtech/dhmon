install: dhmon-metric dhmon.py
	cp dhmon-metric /usr/local/bin/
	cp dhmon.py /usr/local/lib/python2.7/dist-packages/
	rm -f /usr/local/lib/python2.7/dist-packages/dhmon.pyc
	test -f /etc/dhmon.yaml || cp dhmon.yaml /etc
