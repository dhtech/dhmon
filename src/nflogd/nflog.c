#include <arpa/inet.h>
#include <linux/netfilter.h>
#include <linux/ip.h>
#include <libnetfilter_log/libnetfilter_log.h>

#include <Python.h>


#define NFLOG_BUFFER 512
/* TODO(bluecmd): This probably needs to be larger for v6 */
#define NFLOG_MAX_DATA 28


struct packet_queue;
struct packet_queue {
  struct packet_queue *next;
  PyObject *result;
};


struct iterator {
  PyObject_HEAD
  struct nflog_handle *handle;
  struct nflog_g_handle *group;
  void *buffer;
  struct packet_queue *first;
  struct packet_queue *last;
};


static void iterator_destructor(PyObject *self) {
  /* TODO(bluecmd): Error handling */
  struct iterator *object = (struct iterator *)self;
  nflog_close(object->handle);
  free(object->buffer);
}


static int packet_callback(struct nflog_g_handle *gh, struct nfgenmsg *nfmsg,
                           struct nflog_data *nfad, void *data) {
  char *payload;
  int len;
  struct iterator *object = (struct iterator *)data;
  struct packet_queue *new;

  uint32_t uid;
  nflog_get_uid(nfad, &uid);
  len = nflog_get_payload(nfad, &payload);

  new = malloc(sizeof(struct packet_queue));
  new->next = NULL;

  /* TODO(bluecmd): Decode and structure the result here */
  new->result = Py_BuildValue("ii", len, uid);

  if (object->first == NULL) {
    object->first = new;
  } else {
    object->last->next = new;
  }
  object->last = new;
  return 0;
}


static PyObject *iter(PyObject *self) {
  Py_INCREF(self);
  return self;
}


static PyObject *iternext(PyObject *self) {
  struct iterator *object = (struct iterator *)self;

  if (object->first == NULL) {
    /* No queue left, fill it up again */
    int rv = recv(nflog_fd(object->handle), object->buffer, NFLOG_BUFFER, 0);
    if (rv == 0) {
      return NULL;
    } else if (rv < 0) {
      return PyErr_SetFromErrno(PyExc_OSError);
    }

    nflog_handle_packet(object->handle, object->buffer, rv);
  }

  {
    PyObject *packet;
    packet = object->first->result;
    object->first = object->first->next;
    return packet;
  }
}


static PyTypeObject iterator_type = {
    PyObject_HEAD_INIT(NULL)
    .tp_name = "nflog._iterator",
    .tp_basicsize = sizeof(struct iterator),
    .tp_dealloc = iterator_destructor,
    .tp_flags = Py_TPFLAGS_DEFAULT | Py_TPFLAGS_HAVE_ITER,
    .tp_doc = "Streaming nflog iterator object.",
    .tp_iter = iter,
    .tp_iternext = iternext
};


static PyObject *stream(PyObject *self, PyObject *args) {
  int queue;
  struct nflog_handle *handle;
  struct iterator *object;

  if (!PyArg_ParseTuple(args, "i", &queue)) {
    return NULL;
  }

  if ((handle = nflog_open()) == NULL) {
    return PyErr_SetFromErrno(PyExc_OSError);
  }

  /* Construct now to let Python clean up on failure */
  if ((object = PyObject_New(struct iterator, &iterator_type)) == NULL) {
    nflog_close(handle);
    return NULL;
  }

  if (!PyObject_Init((PyObject *)object, &iterator_type)) {
    Py_DECREF(object);
    return NULL;
  }

  object->handle = handle;
  object->buffer = malloc(NFLOG_BUFFER);
  object->first = NULL;
  object->last = NULL;

  if (nflog_bind_pf(handle, AF_INET)) {
    Py_DECREF(object);
    return PyErr_Format(PyExc_IOError, "nflog_bind_pf AF_INET failed");
  }
  if (nflog_bind_pf(handle, AF_INET6)) {
    Py_DECREF(object);
    return PyErr_Format(PyExc_IOError, "nflog_bind_pf AF_INET6 failed");
  }

  if ((object->group = nflog_bind_group(handle, queue)) == NULL) {
    Py_DECREF(object);
    return PyErr_Format(PyExc_IOError, "nflog_bind_group failed");
  }

  if (nflog_set_mode(object->group, NFULNL_COPY_PACKET, NFLOG_MAX_DATA) < 0) {
    Py_DECREF(object);
    return PyErr_Format(PyExc_IOError, "nflog_set_mode failed");
  }

  if (nflog_callback_register(object->group, packet_callback, object)) {
    return PyErr_Format(PyExc_IOError, "nflog_callback_register failed");
  }

  return (PyObject *)object;
}


static PyMethodDef module_funcs[] = {
  { "stream", stream, METH_VARARGS,
    "stream(queue): Create a stream iterator a new NFLOG stream. "
    "Must be run as root." },
  { NULL, NULL, 0, NULL }
};


void initnflog(void) {
  Py_InitModule3("nflog", module_funcs, "nflog library for streaming events");
}
