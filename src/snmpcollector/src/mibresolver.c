/*
 * MIB resolver for snmpcollector
 */

#include <stdio.h>
#include <ctype.h>
#include <net-snmp/net-snmp-config.h>
#include <net-snmp/mib_api.h>
#include <net-snmp/library/default_store.h>

#include <Python.h>


#define MAX_OUTPUT 1024


static PyObject *resolve(PyObject *self, PyObject *args) {
  oid name[MAX_OID_LEN];
  size_t name_length = MAX_OID_LEN;
  const char *input;
  char output[MAX_OUTPUT];
  struct tree *tp;
  PyObject *enum_map;

  if (!PyArg_ParseTuple(args, "s", &input)) {
    return NULL;
  }

  if (read_objid(input, name, &name_length) != 1) {
    return Py_None;
  }

  /* Resolve the OID */
  snprint_objid(output, sizeof(output), name, name_length);

  /* Resolve enum values if we have any */
  enum_map = PyDict_New();
  tp = get_tree(name, name_length, get_tree_head());
  if (tp->enums) {
    struct enum_list *ep = tp->enums;
    while (ep) {
      PyDict_SetItem(enum_map, PyString_FromFormat("%d", ep->value),
          PyString_FromString(ep->label));
      ep = ep->next;
    }
  }

  return Py_BuildValue("sO", output, enum_map);
}

static PyMethodDef module_funcs[] = {
  { "resolve", resolve, METH_VARARGS, "Try to resolve a given OID." },
  { NULL, NULL, 0, NULL }
};


void initmibresolver(void) {
  Py_InitModule3("mibresolver", module_funcs, "MIB resolver utilities");

  /* Turn off noisy MIB debug logging */
  netsnmp_register_loghandler(NETSNMP_LOGHANDLER_NONE, 0);

  /* Print indexes in integer format and not ASCII converted */
  netsnmp_ds_set_boolean(
      NETSNMP_DS_LIBRARY_ID, NETSNMP_DS_LIB_DONT_BREAKDOWN_OIDS, 1);

  init_snmp("snmpapp");
}
