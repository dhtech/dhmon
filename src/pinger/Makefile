clean:
	rm -fr build/

all:
	true

install:
	python setup.py install --root $(DESTDIR) $(COMPILE)
	mkdir -p $(DESTDIR)/opt/pinger/src/
	cp pingerlib.py $(DESTDIR)/opt/pinger/src/
	cp ipplan-pinger pingerd $(DESTDIR)/opt/pinger/
	install -D -m600 pinger.yaml $(DESTDIR)/etc/pinger.yaml
