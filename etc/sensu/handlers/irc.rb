#!/usr/bin/env ruby

require 'sensu-handler'
require 'timeout'
require 'socket'

class Ircer < Sensu::Handler
  def handle

    line = "dhmon: #{@event['client']['name']}:#{@event['check']['name']} reported #{@event['check']['status']} - output was '#{@event['check']['output']}'"
    socket = UDPSocket.new
    socket.connect("77.80.254.70", 9007)
    socket.send line, 0
  end
end

