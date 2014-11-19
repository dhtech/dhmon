$LOAD_PATH << File.dirname(__FILE__)
require 'agent'

logger = Logger.new(STDOUT)
logger.level = Logger::INFO

rng = Random.new()

interval = 30

agent = SNMP::Agent.new(:address => ARGV[0],
                        :port => 1061,
                        :logger => logger)

$start = Time.now.to_i * 100
def uptime
  Time.now.to_i * 100 - $start
end

# entPhysicalModelName
agent.add_plugin('1.3.6.1.2.1.47.1.1.1.1.13.1') do
  "Tableswitch Mock"
end

overdrive = false

# avgBusy1
agent.add_plugin('1.3.6.1.4.1.9.2.1.57.0') do
  if rng.rand(1..100) == 1
    overdrive = true
  elsif rng.rand(1..30) == 1
    overdrive = false
  end
 
  SNMP::Integer.new(overdrive ? rng.rand(90..100) : rng.rand(50..70))
end

# avgBusy5
agent.add_plugin('1.3.6.1.4.1.9.2.1.58.0') do
  SNMP::Integer.new(overdrive ? rng.rand(90..100) : rng.rand(50..70))
end

# busyPer
agent.add_plugin('1.3.6.1.4.1.9.2.1.56.0') do
  SNMP::Integer.new(overdrive ? rng.rand(90..100) : rng.rand(50..70))
end

port_up = true
last_change = uptime

# ifOperStatus
agent.add_plugin('1.3.6.1.2.1.2.2.1.8.1') do
  if rng.rand(1..100) == 1
    port_up = !port_up
    last_change = uptime
  end
  SNMP::Integer.new(port_up ? 1 : 2)
end

full_speed = true

# ifSpeed
agent.add_plugin('1.3.6.1.2.1.2.2.1.5.1') do
  if rng.rand(1..60) == 1
    full_speed = !full_speed
    last_change = uptime
  end
  SNMP::Gauge32.new((full_speed ? 1000 : 100)*1000000)
end

# ifHighSpeed
agent.add_plugin('1.3.6.1.2.1.31.1.1.1.15.1') do
  SNMP::Gauge32.new(full_speed ? 1000 : 100)
end

# ifLastChange
agent.add_plugin('1.3.6.1.2.1.2.2.1.9.1') do
  SNMP::TimeTicks.new(last_change)
end

traffic_period = 20 * 60 * 100
traffic_packets = 100000
traffic_packet_size = 1300

in_octets = 0
out_octets = 0
in_pkts = 0
out_pkts = 0

# ifInOctets
agent.add_plugin('1.3.6.1.2.1.2.2.1.10.1') do
  in_octets += ((traffic_packet_size*traffic_packets) / 2 * (Math.sin(
      uptime.to_f / traffic_period * 2 * 3.1415) + 1) * interval)
  SNMP::Counter32.new(in_octets.modulo(2**32))
end

# ifHCInOctets
agent.add_plugin('1.3.6.1.2.1.31.1.1.1.6.1') do
  SNMP::Counter64.new(in_octets.modulo(2**64))
end

# ifInUcastPkts
agent.add_plugin('1.3.6.1.2.1.2.2.1.11.1') do
  in_pkts += (traffic_packets / 2 * (Math.sin(
    uptime.to_f / traffic_period * 2 * 3.1415) + 1) * interval)
  SNMP::Counter32.new(in_pkts.modulo(2**32))
end

# ifHCInUcastPkts
agent.add_plugin('1.3.6.1.2.1.31.1.1.1.7.1') do
  SNMP::Counter64.new(in_pkts.modulo(2**64))
end

# ifOutOctets
agent.add_plugin('1.3.6.1.2.1.2.2.1.16.1') do
  out_octets += ((traffic_packets*traffic_packet_size) / 2 * (Math.sin(
    uptime.to_f / traffic_period * 2 * 3.1415 + 3.1415) + 1) * interval)
  SNMP::Counter32.new(out_octets.modulo(2**32))
end

# ifHCOutOctets
agent.add_plugin('1.3.6.1.2.1.31.1.1.1.10.1') do
  SNMP::Counter64.new(out_octets.modulo(2**64))
end

# ifOutUcastPkts
agent.add_plugin('1.3.6.1.2.1.2.2.1.17.1') do
  out_pkts += (traffic_packets / 2 * (Math.sin(
    uptime.to_f / traffic_period * 2 * 3.1415 + 3.1415) + 1) * interval)
  SNMP::Counter32.new(out_pkts.modulo(2**32))
end

# ifHCOutUcastPkts
agent.add_plugin('1.3.6.1.2.1.31.1.1.1.11.1') do
  SNMP::Counter64.new(out_pkts.modulo(2**64))
end

in_discards = 0
in_errors = 0
out_discards = 0
out_errors = 0

# ifInDiscards
agent.add_plugin('1.3.6.1.2.1.2.2.1.13.1') do
  in_discards += rng.rand(0..10)
  SNMP::Counter32.new(in_discards)
end

# ifInErrors
agent.add_plugin('1.3.6.1.2.1.2.2.1.14.1') do
  in_errors += rng.rand(0..10)
  SNMP::Counter32.new(in_errors)
end

# ifOutDiscards
agent.add_plugin('1.3.6.1.2.1.2.2.1.19.1') do
  out_discards += rng.rand(0..10)
  SNMP::Counter32.new(out_discards)
end

# ifOutErrors
agent.add_plugin('1.3.6.1.2.1.2.2.1.20.1') do
  out_errors += rng.rand(0..10)
  SNMP::Counter32.new(out_errors)
end

agent.start()

