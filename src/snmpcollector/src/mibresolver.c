/*
 * MIB resolver for snmpcollector
 */

#include <stdio.h>
#include <ctype.h>
#include <net-snmp/net-snmp-config.h>
#include <net-snmp/mib_api.h>

#include <Python.h>


#define MAX_OUTPUT 1024


static PyObject *resolve(PyObject *self, PyObject *args) {
  oid name[MAX_OID_LEN];
  size_t name_length = MAX_OID_LEN;
  const char *input;
  char output[MAX_OUTPUT];

  if (!PyArg_ParseTuple(args, "s", &input)) {
    return NULL;
  }

  if (read_objid(input, name, &name_length) != 1) {
    return Py_None;
  }

  snprint_objid(output, sizeof(output), name, name_length);

  return Py_BuildValue("s", output);
}

static PyMethodDef module_funcs[] = {
  { "resolve", resolve, METH_VARARGS, "Try to resolve a given OID." },
  { NULL, NULL, 0, NULL }
};


void initmibresolver(void) {
  Py_InitModule3("mibresolver", module_funcs, "MIB resolver utilities");
  /* Turn off noisy MIB debug logging */
  netsnmp_register_loghandler(NETSNMP_LOGHANDLER_NONE, 0);
  init_snmp("snmpapp");
}
