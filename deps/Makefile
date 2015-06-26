clean:
	(cd pyyaml; pypy setup.py clean)
	(cd pika; pypy setup.py clean)
	(cd prometheus_client_python; pypy setup.py clean)
	(cd prometheus_client_python; python setup.py clean)
	rm -fr */build
	rm -fr */*.egg-info

all:
	true

install:
	mkdir -p $(DESTDIR)/usr/lib/pypy/
	(cd pyyaml; pypy setup.py install --root $(DESTDIR) $(COMPILE))
	(cd pika; pypy setup.py install --root $(DESTDIR) $(COMPILE))
	(cd prometheus_client_python; pypy setup.py install --root $(DESTDIR) $(COMPILE))
	(cd prometheus_client_python; python setup.py install --root $(DESTDIR) $(COMPILE))
