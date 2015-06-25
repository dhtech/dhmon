clean:
	rm -fr build/

all:
	echo "TODO"

install:
	python setup.py install --root $(DESTDIR) $(COMPILE)
	mkdir -p $(DESTDIR)/opt/snmpcollector/src/
	cp src/*.py $(DESTDIR)/opt/snmpcollector/src/
	cp snmptest $(DESTDIR)/opt/snmpcollector/
	install -D -m600 etc/snmpcollector.yaml $(DESTDIR)/etc/
	install -D etc/snmpcollector.default $(DESTDIR)/etc/default/snmpcollector
