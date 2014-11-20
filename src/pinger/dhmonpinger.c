/*
  *Stateless pinger for dhmon.
 */
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include <sys/time.h>
#include <netinet/ip.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <linux/icmp.h>

#include <Python.h>

/* The ICMP checksum is calculated statically and just set as a constant. */
#define PINGER_ICMP_CHKSUM 0xf7ff
#define PINGER_TTL 128
#define PINGER_CONTROL_SIZE 512
#define PINGER_MAGIC 0xc001c0de

typedef struct __attribute__ ((__packed__)) {
  struct iphdr ip;
  struct icmphdr icmp;
  struct __attribute__ ((__packed__)) {
    uint32_t tv_sec;
    uint32_t tv_usec;
    uint32_t magic;
  } payload;
} icmp_t;


/* len must be divisible by 2 */
static uint16_t in_cksum(void *ptr, size_t len)
{
  uint16_t *u16_ptr = (uint16_t*)ptr;
  uint64_t sum = 0;

  while (len > 0) {
    sum += *u16_ptr++;
    len -= 2;
  }

  sum = (sum >> 16) + (sum & 0xffff);
  sum += (sum >> 16);
  return ~sum;
}


static PyObject *transmit(PyObject *self, PyObject *args) {
  icmp_t packet;
  struct sockaddr_in targetaddr;
  struct timeval timestamp;
  size_t sent;
  int sockfd;
  const char *textaddr;

  memset(&packet, 0, sizeof(packet));
  memset(&targetaddr, 0, sizeof(targetaddr));

  packet.ip.version = 4;
  packet.ip.ihl = sizeof(packet.ip) / 4;
  packet.ip.tot_len = htons(sizeof(packet));
  packet.ip.protocol = IPPROTO_ICMP;
  packet.ip.ttl = PINGER_TTL;

  packet.icmp.type = ICMP_ECHO;
  packet.icmp.checksum = htons(PINGER_ICMP_CHKSUM);
  packet.payload.magic = htonl(PINGER_MAGIC);

  if (!PyArg_ParseTuple(args, "is", &sockfd, &textaddr)) {
    return NULL;
  }

  if (inet_pton(AF_INET, textaddr, &targetaddr.sin_addr) != 1)
    return PyErr_Format(PyExc_IOError, "inet_pton failed for IP");

  targetaddr.sin_family = AF_INET;
  packet.ip.daddr = targetaddr.sin_addr.s_addr;

  /* payload is magic + sent timestamp */
  if (gettimeofday(&timestamp, NULL) < 0)
    return PyErr_SetFromErrno(PyExc_OSError);

  packet.payload.tv_sec = timestamp.tv_sec;
  packet.payload.tv_usec = timestamp.tv_usec;
  packet.icmp.checksum = 0;
  packet.icmp.checksum = in_cksum(
      &packet.icmp, sizeof(packet.icmp) + sizeof(packet.payload));

  sent = sendto(
      sockfd, (void*) &packet, sizeof(packet), 0,
      (struct sockaddr*) &targetaddr, sizeof(targetaddr));
  if (sent < 0) {
    return PyErr_SetFromErrno(PyExc_IOError);
  }

  Py_RETURN_NONE;
}


static PyObject *receive(PyObject *self, PyObject *args) {
  char ip[16];
  uint8_t control[PINGER_CONTROL_SIZE];
  icmp_t packet;
  struct msghdr msg;
  struct cmsghdr *cmsg;
  struct iovec entry;
  struct sockaddr_in from_addr;
  struct timeval *stamp;
  int res;
  int sockfd;

  if (!PyArg_ParseTuple(args, "i", &sockfd)) {
    return NULL;
  }

  for(;;) {
    int secs;
    int usecs;

    memset(&msg, 0, sizeof(msg));
    msg.msg_iov = &entry;
    msg.msg_iovlen = 1;
    entry.iov_base = &packet;
    entry.iov_len = sizeof(packet);
    msg.msg_name = (caddr_t)&from_addr;
    msg.msg_namelen = sizeof(from_addr);
    msg.msg_control = control;
    msg.msg_controllen = PINGER_CONTROL_SIZE;

    res = recvmsg(sockfd, &msg, 0);
    if (res < 0) {
      return PyErr_SetFromErrno(PyExc_IOError);
    }

    /* Check that we actually sent this packet. */
    if (res != sizeof(packet)) {
      continue;
    }
    if (packet.payload.magic != htonl(PINGER_MAGIC)) {
      continue;
    }

    stamp = NULL;
    for (cmsg = CMSG_FIRSTHDR(&msg); cmsg; cmsg = CMSG_NXTHDR(&msg, cmsg)) {

      if (cmsg->cmsg_level != SOL_SOCKET)
         continue;
      if (cmsg->cmsg_type != SO_TIMESTAMP)
         continue;

      stamp = (struct timeval *)CMSG_DATA(cmsg);
    }

    if (!stamp) {
      fprintf(stderr, "No timestamp provided by the kernel\n");
      continue;
    }

    secs = stamp->tv_sec - packet.payload.tv_sec;
    usecs = stamp->tv_usec - packet.payload.tv_usec;
    if (usecs < 0) {
      secs--;
      usecs = (1000000 + stamp->tv_usec) - packet.payload.tv_usec;
    }

    if (inet_ntop(AF_INET, &from_addr.sin_addr, ip, sizeof(ip)) == NULL)
      return PyErr_Format(PyExc_IOError, "inet_ntop failed for IP");

    return Py_BuildValue("sii", ip, secs, usecs);
  }
}


static PyObject *create_socket(PyObject *self, PyObject *unused_args) {
  struct icmp_filter filt;
  int enable = 1;
  int sockfd;

  if ((sockfd = socket(AF_INET, SOCK_RAW, IPPROTO_ICMP)) < 0)
    return PyErr_SetFromErrno(PyExc_IOError);

  if (setsockopt(
        sockfd, SOL_SOCKET, SO_TIMESTAMP, &enable, sizeof(enable)) < 0)
    return PyErr_SetFromErrno(PyExc_IOError);

  if (setsockopt(
        sockfd, IPPROTO_IP, IP_HDRINCL, &enable, sizeof(enable)) < 0)
    return PyErr_SetFromErrno(PyExc_IOError);

  filt.data = ~(1<<ICMP_ECHOREPLY);
  if (setsockopt(
      sockfd, SOL_RAW, ICMP_FILTER, (char*)&filt, sizeof(filt)) < 0)
    return PyErr_SetFromErrno(PyExc_IOError);

  return Py_BuildValue("i", sockfd);
}


static PyMethodDef module_funcs[] = {
  { "transmit", transmit, METH_VARARGS,
    "Send out an ICMP Ping Request for a given IPv4." },
  { "receive", receive, METH_VARARGS,
    "Receive one ICMP Ping Reply." },
  { "create_socket", create_socket, METH_NOARGS,
    "Create a new ICMP socket, must be run as root." },
  { NULL, NULL, 0, NULL }
};


void initdhmonpinger(void) {
  Py_InitModule3("dhmonpinger", module_funcs, "ICMP functions for dhmon");
}
