$LOAD_PATH << File.dirname(__FILE__)
require 'agent'

logger = Logger.new(STDOUT)
logger.level = Logger::INFO

rng = Random.new()

interval = 30

agent = SNMP::Agent.new(:address => ARGV[0],
                        :port => 1061,
                        :logger => logger)

def uptime
  File.read('/proc/uptime').split(' ')[0].to_f * 100
end

# entPhysicalModelName
agent.add_plugin('1.3.6.1.2.1.47.1.1.1.1.13.1') do
  "Tableswitch Mock"
end

start = uptime

agent.add_plugin('1.3.6.1.2.1.25.1.1.0') do
  SNMP::TimeTicks.new(start)
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
  SNMP::Integer.new((full_speed ? 1000 : 100)*1000000)
end

# ifLastChange
agent.add_plugin('1.3.6.1.2.1.2.2.1.9.1') do
  SNMP::TimeTicks.new(last_change)
end

traffic_period = 20 * 60 * 100
traffic_packets = 100000
traffic_packet_size = 1300

# ifInOctets
agent.add_plugin('1.3.6.1.2.1.2.2.1.10.1') do
  SNMP::Counter32.new((traffic_packet_size*traffic_packets) / 2 * (Math.sin(
    uptime / traffic_period * 2 * 3.1415) + 1) * interval)
end

# ifInUcastPkts
agent.add_plugin('1.3.6.1.2.1.2.2.1.11.1') do
  SNMP::Counter32.new(traffic_packets / 2 * (Math.sin(
    uptime / traffic_period * 2 * 3.1415) + 1) * interval)
end

# ifOutOctets
agent.add_plugin('1.3.6.1.2.1.2.2.1.16.1') do
  SNMP::Counter32.new((traffic_packet_size*traffic_packets) / 2 * (Math.sin(
    uptime / traffic_period * 2 * 3.1415 + 3.1415) + 1) * interval)
end

# ifOutUcastPkts
agent.add_plugin('1.3.6.1.2.1.2.2.1.17.1') do
  SNMP::Counter32.new(traffic_packets / 2 * (Math.sin(
    uptime / traffic_period * 2 * 3.1415 + 3.1415) + 1) * interval)
end

# ifInDiscards
agent.add_plugin('1.3.6.1.2.1.2.2.1.13.1') do
  SNMP::Counter32.new(rng.rand(0..10))
end

# ifInErrors
agent.add_plugin('1.3.6.1.2.1.2.2.1.14.1') do
  SNMP::Counter32.new(rng.rand(0..10))
end

# ifOutDiscards
agent.add_plugin('1.3.6.1.2.1.2.2.1.19.1') do
  SNMP::Counter32.new(rng.rand(0..10))
end

# ifOutErrors
agent.add_plugin('1.3.6.1.2.1.2.2.1.20.1') do
  SNMP::Counter32.new(rng.rand(0..10))
end

agent.start()

