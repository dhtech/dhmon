#!/usr/bin/env ruby

require 'socket'

require 'flapjack/utility'
require 'flapjack/data/entity_check'
require 'flapjack/data/alert'

module Flapjack
  module Gateways

    class Udp

      class << self

        include Flapjack::Utility

        def start
          @logger.info("starting")
          @logger.debug("new udp gateway pikelet with the following options: #{@config.inspect}")
          @udp_config = @config.delete('smtp_config')
          @sent = 0
          @fqdn = `/bin/hostname -f`.chomp
        end

        def prepare(contents)
          Flapjack::Data::Alert.new(contents, :logger => @logger)
        rescue => e
          @logger.error "Error preparing udp to #{contents['address']}: #{e.class}: #{e.message}"
          @logger.error e.backtrace.join("\n")
          raise
        end

        def perform(contents)
          @logger.debug "Woo, got an alert to send out: #{contents.inspect}"
          # We do not handle rollups
          alert = prepare(contents)
          return if alert.rollup
          template_path = case
           when @config.has_key?('template')
             @config['template']
           else
             File.dirname(__FILE__) + "/udp/format.text.erb"
           end
          template = ERB.new(File.read(template_path), nil, '-')

          @alert  = alert
          bnd     = binding
          begin
            output = template.result(bnd)
          rescue => e
            @logger.error "Error while excuting ERBs for udp"
            raise
          end

          socket = UDPSocket.new
          host, port = alert.address.split(':')
          @logger.debug "Sending line to #{host}:#{port.to_i}: #{output.inspect}"
          socket.connect(host, port.to_i)
          socket.send output, 0
        end
      end

    end
  end
end
