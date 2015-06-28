clean:
	rm -fr build/
	rm -f .coverage
	rm -f src/*.pyc
	rm -fr src/__pycache__/

all:
	echo "TODO"

test:
	(cd $(TESTBASE); \
	coverage run -p $(CURDIR)/src/supervisor_test.py \
	)

install:
	python setup.py install --root $(DESTDIR) $(COMPILE)
	mkdir -p $(DESTDIR)/opt/snmpcollector/src/
	cp src/*.py $(DESTDIR)/opt/snmpcollector/src/
	cp snmptest $(DESTDIR)/opt/snmpcollector/
	install -D -m600 etc/snmpcollector.yaml $(DESTDIR)/etc/
	install -D etc/snmpcollector.default $(DESTDIR)/etc/default/snmpcollector
	install -D snmpcollector.init $(DESTDIR)/etc/init.d/snmpcollector
