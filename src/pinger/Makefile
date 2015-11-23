clean:
	rm -fr build/

all:
	true

test:
	true

install:
	python setup.py install --root $(DESTDIR) $(COMPILE)
	mkdir -p $(DESTDIR)/opt/pinger/src/
	cp pingerd $(DESTDIR)/opt/pinger/
