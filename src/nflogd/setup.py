from distutils.core import setup, Extension

setup(name='nflog', version='0.1', ext_modules=[
    Extension('nflog', ['nflog.c'], libraries=['netfilter_log'])])
