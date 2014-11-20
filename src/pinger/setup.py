from distutils.core import setup, Extension

setup(name='dhmonpinger', version='0.1', ext_modules=[
    Extension('dhmonpinger', ['dhmonpinger.c'])])
