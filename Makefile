
TAG=$(shell git name-rev --tags --name-only $(shell git rev-parse HEAD))

distclean:

clean install all:
	(test $@ = clean && rm -f .coverage) || true
	make -C $(CURDIR)/deps/ $@
	make -C $(CURDIR)/src/ $@

test:
	coverage erase
	TESTBASE=$(CURDIR) make -C $(CURDIR)/src/ $@
	coverage combine
	coverage report -m

deb:
	git checkout $(TAG)
	cp debian/changelog debian/changelog.old
	gbp dch --snapshot --auto --ignore-branch
	rm -f ../dhmon_*.orig.tar.gz
	gbp buildpackage --git-upstream-tree=$(TAG) --git-submodules \
		--git-ignore-new --git-ignore-branch --git-builder='debuild -i -I -us -uc'
	mv debian/changelog.old debian/changelog
