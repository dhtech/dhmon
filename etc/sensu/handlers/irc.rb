#!/usr/bin/env ruby

require 'sensu-handler'
require 'timeout'
require 'socket'

class Ircer < Sensu::Handler
  def handle
    if @event['check']['name'] == 'keepalive'
      line = "[#{@event['client']['name']}:#{@event['check']['name']}] #{@event['check']['output']}"
    else
      line = "[#{@event['check']['name']}]: #{@event['check']['output']}"
    end
    socket = UDPSocket.new
    socket.connect("77.80.254.70", 9007)
    socket.send line, 0
  end
end

