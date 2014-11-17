/*
 * Stateless pinger for dhmon.
 */
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include <sys/time.h>
#include <netinet/ip.h>
#include <netinet/ip_icmp.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <zmq.h>

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

typedef struct __attribute__ ((__packed__)) {
  char ip[16];
  uint32_t secs;
  uint32_t usecs;
} zmq_response_t;

uint16_t in_cksum(void *ptr, size_t len);


int read_address_from_zmq(void *zmqfd, struct in_addr *addr) {
  char buffer[16];
  int size = zmq_recv(zmqfd, buffer, 15, 0);
  if (size == -1) {
    fprintf(stderr, "zmq_recv failed\n");
    return -1;
  }

  buffer[size] = 0;
  if (inet_pton(AF_INET, buffer, addr) != 1)
    return -1;

  printf("Read address %s\n", buffer);
  return 0;
}


void publish_ping_result(void *zmqfd, struct in_addr *addr,
                         int secs, int usecs) {
  zmq_response_t response;

  memset(&response, 0, sizeof(response));
  if (inet_ntop(AF_INET, addr, response.ip, sizeof(response.ip)) == NULL) {
    perror("inet_ntop");
    return;
  }
  response.secs = secs;
  response.usecs = usecs;

  zmq_send(zmqfd, &response, sizeof(response), ZMQ_NOBLOCK);
  printf("Published result for %s\n", response.ip);
}


void xmit_thread(int sockfd) {
  icmp_t packet;
  struct sockaddr_in targetaddr;
  struct timeval timestamp;
  size_t sent;
  void *zmq_context;
  void *zmqfd;

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

  /* set up ZMQ */
  zmq_context = zmq_ctx_new();
  zmqfd = zmq_socket(zmq_context, ZMQ_SUB);
  if (zmq_setsockopt(zmqfd, ZMQ_SUBSCRIBE, "", 0)) {
    perror("zmq_setsockopt");
    return;
  }
  zmq_bind(zmqfd, "tcp://*:5560");

  for(;;) {
    /* block here and wait for the address to send to */
    if (read_address_from_zmq(zmqfd, &targetaddr.sin_addr))
      continue;

    targetaddr.sin_family = AF_INET;
    packet.ip.daddr = targetaddr.sin_addr.s_addr;

    /* payload is magic + sent timestamp */
    if (gettimeofday(&timestamp, NULL) < 0) {
      perror("gettimeofday");
      continue;
    }
    packet.payload.tv_sec = timestamp.tv_sec;
    packet.payload.tv_usec = timestamp.tv_usec;
    packet.icmp.checksum = 0;
    packet.icmp.checksum = in_cksum(
        &packet.icmp, sizeof(packet.icmp) + sizeof(packet.payload));

    sent = sendto(
        sockfd, (void*) &packet, sizeof(packet), 0,
        (struct sockaddr*) &targetaddr, sizeof(targetaddr));
    if (sent < 0) {
      perror("sendto");
      continue;
    }
  }

  zmq_ctx_destroy(zmq_context);
}


void recv_thread(int sockfd) {
  icmp_t packet;
  struct msghdr msg;
  struct cmsghdr *cmsg;
  struct iovec entry;
  struct sockaddr_in from_addr;
  struct timeval *stamp;
  void *control;
  void *zmq_context;
  void *zmqfd;
  int res;

  control = malloc(PINGER_CONTROL_SIZE);

  /* set up ZMQ */
  zmq_context = zmq_ctx_new();
  zmqfd = zmq_socket(zmq_context, ZMQ_PUB);
  zmq_bind(zmqfd, "tcp://*:5561");

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
      perror("recvmsg");
      continue;
    }

    /* Check that we actually sent this packet. */
    if (res != sizeof(packet))
      continue;
    if (packet.payload.magic != htonl(PINGER_MAGIC))
      continue;

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

    publish_ping_result(zmqfd, &from_addr.sin_addr, secs, usecs);
  }

  zmq_ctx_destroy(zmq_context);
  free(control);
}


int main(int argc, char *argv[]) {
#ifdef DISPLAY_ZMQ_VERSION
  int zmq_major = 0;
  int zmq_minor = 0;
  int zmq_patch = 0;
#endif
  int enable = 1;
  int sockfd;

  if ((sockfd = socket(AF_INET, SOCK_RAW, IPPROTO_ICMP)) < 0) {
    perror("socket");
    return -1;
 }

  /* drop to nobody */
  if (setgid(65534) < 0) {
    perror("setgid");
    return -1;
  }
  if (setuid(65534) < 0) {
    perror("setuid");
    return -1;
  }

  if (setsockopt(
        sockfd, SOL_SOCKET, SO_TIMESTAMP, &enable, sizeof(enable)) < 0) {
    perror("setsockopt");
    return -1;
  }

  if (setsockopt(
        sockfd, IPPROTO_IP, IP_HDRINCL, &enable, sizeof(enable)) < 0) {
    perror("setsockopt");
    return -1;
  }

#ifdef DISPLAY_ZMQ_VERSION
  zmq_version(&zmq_major, &zmq_minor, &zmq_patch);
  printf("ZMQ %d.%d.%d version in use\n", zmq_major, zmq_minor, zmq_patch);
#endif

  if (fork() == 0) {
    xmit_thread(sockfd);
  }

  recv_thread(sockfd);
  return 0;
}


/* len must be divisible by 2 */
uint16_t in_cksum(void *ptr, size_t len)
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
