
clean install all:
	make -C $(CURDIR)/deps/ $@
	make -C $(CURDIR)/src/ $@
