$LOAD_PATH << File.dirname(__FILE__)
require 'agent'

logger = Logger.new(STDOUT)
logger.level = Logger::INFO

agent = SNMP::Agent.new(:address => ARGV[0],
                        :port => 1061,
                        :logger => logger)
agent.add_plugin('1.3.6.1.2.1.25.1.1.0') do
  SNMP::TimeTicks.new(File.read('/proc/uptime').split(' ')[0].to_f * 100).to_i
end
agent.start()
