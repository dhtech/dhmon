#!/usr/bin/ruby
#
# Portions Copyright (c) 2004 David R. Halliday
# All rights reserved.
#
# This SNMP library is free software.  Redistribution is permitted under the
# same terms and conditions as the standard Ruby distribution.  See the
# COPYING file in the Ruby distribution for details.
#
# Portions Copyright (c) 2006 Matthew Palmer <mpalmer@hezmatt.org>
# All rights reserved.
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation (version 2 of the License)
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin St, Fifth Floor, Boston MA  02110-1301 USA
#

require 'snmp'
require 'socket'
require 'logger'

module SNMP  # :nodoc:

##
# = SNMP Agent skeleton
#
# Objects of this class are capable of acting as SNMP agents -- that is,
# receiving SNMP PDUs and (possibly) returning data as a result of those
# requests.
#
# We call this class a skeleton, though, since as it stands this agent won't
# do much of anything -- it only has support for the most basic of system
# information (sysDescr, sysUptime, sysContact, sysName, and sysLocation).
# In order to get more interesting data out of it, you'll need to define
# code to examine the host machine and it's environment and return data.
#
# What values get returned is determined by "plugins", small chunks of code
# that return values that the agent can then send back to the requestor.
#
# == A simple example agent
#
#    require 'snmp/agent'
#
#    agent = SNMP::Agent.new(:port => 16161, :logger => Logger.new(STDOUT))
#    agent.add_plugin('1.3.6.1.2.1.25.1.1.0') do
#      SNMP::TimeTicks.new(File.read('/proc/uptime').split(' ')[0].to_f * 100).to_i)
#    end
#    agent.start()
#
# This agent will respond to requests for the given OID (hrSystemUptime in
# this case, as it happens) and return the number of time ticks as read from
# the /proc/uptime file.  In this plugin, we've defined the exact and
# complete OID that we want to return the value of, but that's by no means
# necessary -- one plugin can handle a larger number of OIDs in itself by
# simply defining the 'base' OID it wants to handle, and returning
# structured data when it's called.  The pre-defined plugin for basic system
# parameters is a good (if basic) example of how you structure your data.
#
# == Writing plugins
#
# I've tried to make writing plugins as painless as possible, but
# unfortunately there's still a fair amount of hassle that's required in
# some circumstances. A basic understanding of how SNMP MIBs and OIDs work
# will help immensely.
#
# The basic layout of all plugins is the same -- you map a base OID to a
# chunk of code, and then any requests for OIDs in that subtree cause the
# code to be executed to determine the value (or lack thereof).  You use
# SNMP::Agent#add_plugin to add a new plugin. This method takes a base OID
# (as a string or an array of integers) and a block of code to be run when
# the requested OID matches the given base OID.
#
# The result from the block of code should either be a single value (if you
# want the base OID to return a value itself), a simple array or hash (if
# the base OID maps to a list of entries), or a tree of arrays and/or hashes
# that describes the data underneath the base OID.
#
# For example, if you want OID .1.2.3 to return the single value 42, you
# would do something like this:
#
#    agent = SNMP::Agent.new
#    agent.add_plugin('1.2.3') { 42 }
#
# Internally, when a Get request for the OID .1.2.3 is received, the agent
# will find the plugin, run it, and return a PDU containing 'INTEGER: 42'.
# Any request for an OID below .1.2.3 will be answered with NoSuchObject.
#
# If you want to return a list of dwarves, you could do this:
#
#    agent.add_plugin('1.2.4') { %w{sleepy grumpy doc crazy hungry} }
#
# In this case, requesting the OID '1.2.4' will get you NoSuchObject, but
# requesting '1.2.4.0' will get you the OCTET STRING 'sleepy', and
# requesting '1.2.4.3' will return 'crazy'.  You could also walk the whole
# of the '1.2.4' subtree and you'll get each of the dwarves in turn.
#
# "Sparse" data can be handled in much the same way, but with a hash instead
# of an array.  So a list of square roots, indexed by the squared value,
# might look like this:
#
#    agent.add_plugin('1.2.5') { {1 => 1, 4 => 2, 9 => 3, 16 => 4, 25 => 5} }
#
# Now, if you get '1.2.5.9', you'll get the INTEGER 3, but if you get either
# of '1.2.5.8' or '1.2.5.10' you'll get noSuchObject.
#
# More complicated tree structures are possible, too -- such as a
# two-dimensional "multiplication table", like so:
#
#    agent.add_plugin('1.2.6') { [[0, 0, 0, 0, 0, 0],
#                                 [0, 1, 2, 3, 4, 5],
#                                 [0, 2, 4, 6, 8, 10],
#                                 [0, 3, 6, 9, 12, 15],
#                                 [0, 4, 8, 12, 16, 20],
#                                 [0, 5, 10, 15, 20, 25]
#                                ]
#                              }
#
# Now you can get the product of any two numbers between 0 and 5 by simply
# doing a get on your agent for '1.2.6.n.m' -- or you could use a
# calculator.
#
# The real value of plugins isn't static data like the above examples, it's
# dynamic creation of data -- reading things from files, parsing kernel
# data, that sort of thing.  The only limitation is that it has to fit into
# the SNMP way of doing things (tables and lists and values, oh my!) and you
# need to be able to write the code for it.
#
# === Restrictions for plugin OIDs
#
# You cannot have a plugin respond to a subtree of another plugin.  That is,
# if you have one plugin which has registered itself as handling '1.2.3',
# you cannot have another plugin that says it handles '1.2' or '1.2.3.4' --
# in either case, the two plugins will conflict.
#
# This restriction isn't really an SNMP one, it's more of a sanity-saving
# measure.  Imagine the confusion from having to troubleshoot wrong values
# in a heavily nested plugin tree...
#
# If you have a deep and abiding need to nest plugins, however, get in
# contact and we'll see about removing the limitation.
#
# === Plugins and data types
#
# There is a limted amount of type interpolation in the plugin handler.
# At present, integer values will be kept as integers, and most everything
# else will be converted to an OCTET STRING.  If you have a particular need
# to return values of particular SNMP types, the agent will pass-through any
# SNMP value objects that are created, so if you just *had* to return a
# Gauge32 for a particular OID, you could do:
#
#    agent.add_plugin('1.2.3') { SNMP::Gauge32.new(42) }
#
# === Caching plugin data
#
# Often, running a plugin to collect data is quite expensive -- if you're
# calling out to a web service or doing a lot of complex calculations, and
# generating a large resulting tree, you really don't want to be re-doing
# all that work for every SNMP request (and remember, during a walk, that
# tree is going to be completely recreated for every element walked in that
# tree).
#
# To prevent this problem, the SNMP agent provides a fairly simple caching
# mechanism within itself.  If you return the data from your plugin as a
# hash, you can add an extra element to that hash, with a key of
# <tt>:cache</tt>, which should have a value of how many seconds you want
# the agent to retain your data for before re-running the plugin.  So, a
# simple cached data tree might look like:
#
#   {:cache => 30, 0 => [0, 1, 2], 1 => ['a', 'b', 'c']}
#
# So the agent will cache the given data (<tt>{0 => [...], 1 => [...]}</tt>) for
# 30 seconds before running the plugin again to get a new set of data.
#
# How long should you cache data for?  That's up to you.  The tradeoffs are
# between the amount of time it takes to create the data tree, how quickly
# the data "goes stale", and how large the data tree is.  The longer it
# takes to re-create the tree and the larger the tree is, the longer you
# should cache for.  Large trees should be cached for longer because big
# trees take longer to walk, and it'd be annoying if, half-way through the
# walk, the plugin got called again.  How long the data is relevant for is
# essentially the upper bound on cache time -- there's no point in keeping
# data around for longer than it's valid.
#
# What if, for some reason, you can't come up with a reasonable cache
# timeout value? You've got a huge tree, that takes ages to produce, but it
# needs to be refreshed really often.  Try splitting your single monolithic
# plugin into smaller "chunks", each of which can be cached separately. The
# smaller trees will take less time to walk, and hopefully you won't need to
# do the full set of processing to obtain the subset of values, so it'll be
# quicker to process.
#
# The one limitation on caching is that you can't cache a single value,
# because you need to return a hash to provide the :cache key.  This is yet
# to cause anyone any problems, however I am aware of the potential problem,
# and if it causes anyone major grief, please get in touch and we'll work out
# an alternate solution.
# 
# === Communities in Plugins
#
# If you have a need to examine the community that was passed to the SNMP
# request that caused your plugin to be run, you can provide an argument to
# your block and have the community put in there.  For instance:
#
#   agent.add_plugin('1.2.3.4') { |c| c }
#
# Will return the community name passed to any request for the OID .1.2.3.4.
#
# Note that plugin value caching and community inspection do not play well
# together at present -- if you return a value and ask for it to be cached,
# it will be cached regardless of the community that is used in subsequent
# requests.  Thus, if you have a need to examine the community in your plugin,
# don't ask the agent to cache the response.
# 
# === "Declining" a request
#
# If you're writing a plugin that, in some instances, should completely fail
# to respond, you can raise a DontReplyException.  This will cause the agent
# to not send a response PDU.  Note the difference between raising
# DontReplyException and returning nil -- the latter will cause a
# NoSuchObject response, while the former will make the server look like a
# black hole.
#
# There is a potential issue with raising DontReplyException if there are
# multiple OIDs in the request PDU, in that no response will be sent if
# *any* of the OIDs return a DontReplyException.  Hence they should be used
# with caution.
#
# === Bulk plugin loading
#
# If you've got a large collection of plugins that you want to include in
# your system, you don't have to define them all by hand within your code --
# you can use the <tt>add_plugin_dir</tt> method to load all of the plugins
# present in a directory.
#
# There are two sorts of plugin files recognised by the loader:
#
# - Any files whose names look like OIDs.  In this case, the filename is
#   used as the base OID for the plugin, and the contents of the file are
#   taken as the complete code to run for the plugin.  This method is
#   really only suitable for fairly simple plugins, and is mildly
#   deprecated -- practical experience has shown that this method of
#   defining a plugin is actually fairly confusing.
#
# - Any file in the plugin directory which ends in <tt>.rb</tt> is evaluated
#   as ruby code, in the context of the SNMP::Agent object which is running
#   <tt>add_plugin_dir</tt>.  This means that any methods or classes defined in
#   the file are in the scope of the SNMP::Agent object itself.  To
#   actually add a plugin in this instance, you need to run
#   <tt>self.add_plugin</tt> explicitly. This method of defining plugins
#   externally is preferred, since although it is more verbose, it is much
#   more flexible and lends itself to better modularity of plugins.
#
# == Proxying to other SNMP agents
#
# Although the Ruby SNMP agent is quite versatile, it currently lacks a lot
# of the standard MIB trees that we know and love.  This means, of course,
# that if you want to walk standard trees, like load averages, disk
# partitions, and network statistics, you'll need to be running another SNMP
# agent on your machines in addition to this agent.  Rather than doing the
# dirty and making you remember whatever non-standard port you may have put
# one (or both) of the agents on, you can instead proxy the other agent
# through the Ruby SNMP agent.
#
# The syntax for this is very simple:
#
#   agent.add_proxy(oid, host, port)
#
# This simple call will cause any request to any part of the MIB subtree
# rooted at <oid> to be fulfilled by making an SNMP request to the agent
# running on <host> and listening on <port> and returning whatever that
# agent sends back to us.
#
# A (minor) limitation at the moment is that you can't proxy a subtree
# provided by the backend agent to a different subtree in the Ruby SNMP
# agent.  I don't consider this to be a major limitation, as -- due to the
# globally-unique and globally-meaningful semantics of the MIB -- you
# shouldn't have too much call for changing OIDs in proxies.
#
# There are some oddities in the proxy in the area of communities, and as far
# as I am aware nobody is doing anything particularly taxing with the proxy,
# so it may harbour unpleasant corner cases.  Sorry about that.
#

class Agent  # :doc:
	DefaultSettings = { :address => "127.0.0.1",
                      :port => 161,
	                    :max_packet => 8000,
	                    :logger => Logger.new('/dev/null'),
	                    :sysContact => "Someone",
	                    :sysName => "Ruby SNMP agent",
	                    :sysLocation => "Unknown",
	                    :community => nil
	                  }

	# Create a new agent.
	#
	# You can provide a list of settings to the new agent, as a hash of
	# symbols and values.  Currently valid settings (and their defaults)
	# are as follows:
	#
	# [:port]        The UDP port to listen on.  Default: 161
	# [:max_packet]  The largest UDP packet that will be read.  Default: 8000
	# [:logger]      A Logger object to write all messages to.  Default: sends all
	#                messages to /dev/null.
	# [:sysContact]  A string to provide when an SNMP request is made for
	#                sysContact.  Default: "Someone"
	# [:sysName]     A string to provide when an SNMP request is made for
	#                sysName.  Default: "Ruby SNMP agent"
	# [:sysLocation] A string to provide when an SNMP request is made for
	#                sysLocation.  Default: "Unknown"
	# [:community]   Either a string or array of strings which specify the
	#                community/communities which this SNMP agent will respond
	#                to.  The default is nil, which means that the agent will
	#                respond to any SNMP PDU, regardless of the community name
	#                encoded in the PDU.
	#
	def initialize(settings = {})
		settings = DefaultSettings.merge(settings)
		
		@address = settings[:address]
		@port = settings[:port]
		@log = settings[:logger]
		@max_packet = settings[:max_packet]
		@community = settings[:community]
		@socket = nil
		
		@mib_tree = MibNodeTree.new(:logger => @log)
		
		agent_start_time = Time.now
		self.add_plugin('1.3.6.1.2.1.1') { {1 => [`uname -a`],
		                                    3 => [SNMP::TimeTicks.new(((Time.now - agent_start_time) * 100).to_i)],
		                                    4 => [settings[:sysContact]],
		                                    5 => [settings[:sysName]],
		                                    6 => [settings[:sysLocation]]
		                                   }
		                                 }
	end

	# Handle a new OID.
	#
	# See the class documentation for full information on how to use this method.
	#
	def add_plugin(base_oid, &block)
 		raise ArgumentError.new("Must pass a block to add_plugin") unless block_given?
		@mib_tree.add_node(base_oid, MibNodePlugin.new(:logger => @log, :oid => base_oid, &block))
	end

	# Add a directory full of plugins to the agent.
	#
	# To make it as simple as possible to provide plugins to the SNMP agent,
	# you can create a directory and fill it with files containing plugin
	# code, then tell the agent where to find all that juicy code.
	#
	# The files in the plugin directory are simply named after the base OID,
	# and the contents are the code you want to execute, exactly as you would
	# put it inside a block.
	#
	def add_plugin_dir(dir)
		orig_verbose = $VERBOSE
		$VERBOSE = nil
		Dir.entries(dir).each do |f|
			@log.info("Looking at potential plugin #{File.join(dir, f)}")
			if f =~ /^([0-9]\.?)+$/
				begin
					self.add_plugin(f, &eval("lambda do\n#{File.read(File.join(dir, f))}\nend\n"))
				rescue SyntaxError => e
					@log.warn "Syntax error in #{File.join(dir, f)}: #{e.message}"
				end
			elsif f =~ /\.rb$/
				begin
					self.instance_eval(File.read(File.join(dir, f)))
				rescue SyntaxError => e
					@log.warn "Syntax error in #{File.join(dir, f)}: #{e.message}"
				rescue Exception => e
					@log.warn "Some error occured while loading #{File.join(dir, f)}: #{e.message}"
				end
			end
		end
			
		$VERBOSE = orig_verbose
	end

	def add_proxy(base_oid, host, port)
		@mib_tree.add_node(base_oid, SNMP::MibNodeProxy.new(:base_oid => base_oid,
		                                                    :host => host,
		                                                    :port => port,
		                                                    :logger => @log)
		                  )
	end

	# Main connection handling loop.
	#
	# Call this method when you're ready to respond to some SNMP messages.
	#
	# Caution: this method blocks (does not return until it's finished
	# serving SNMP requests).  As a result, you should run it in a separate
	# thread or catch one or more signals so that you can actually call
	# +shutdown+ to stop the agent.
	def start
		open_socket if @socket.nil?

		@log.info "SNMP agent running"
		@socket.listen do |data|
			begin
				@log.debug "Received #{data.length} bytes"
				@log.debug data.inspect
				
				message = Message.decode(data)
				
				# Community access checks
				community_ok = false
				if @community.nil?
					community_ok = true
				else
					@log.debug "Checking community"
					community_ok = if @community.class == String
						@log.debug "Checking if #{message.community} is #{@community}"
						@community == message.community
					elsif @community.class == Array
						@log.debug "Checking if #{message.community} is in #{@community.inspect}"
						@community.include? message.community
					else
						@log.error "Invalid setting for :community"
						false
					end
					if community_ok
						@log.debug "Community OK"
					else
						@log.debug "Community invalid"
					end
				end
				
				if community_ok
					case message.pdu
						when GetRequest
							@log.debug "GetRequest received"
							response = process_get_request(message)
						when GetNextRequest
							@log.debug "GetNextRequest received"
							response = process_get_next_request(message)
						when GetBulkRequest
							@log.debug "GetBulkRequest received"
							response = process_get_next_request(message)
						else
							raise SNMP::UnknownMessageError.new("invalid message #{message.inspect}")
					end
					encoded_message = response.encode
					@log.debug encoded_message.inspect
					encoded_message
				else
					nil
				end
			rescue SNMP::UnknownMessageError => e
				@log.error "Unknown SNMP message: #{e.message}"
				nil
			rescue IOError => e
				raise if e.message == 'stream closed' or e.message == 'closed stream'
				@log.warn "IO Error: #{e.message}"
				nil
			rescue DontReplyException => e
				nil
			rescue Errno::EBADF
				raise
			rescue => e
				@log.error "Error in handling message: #{e.message}: #{e.backtrace.join("\n")}"
				nil
			end
		end
	end

	# Stop the running agent.
	#
	# Close the socket and stop the agent from running.  It can be started again
	# just by calling +start+ again.  You will, of course, need to be catching
	# signals or be multi-threaded in order to be able to actually call this
	# method, because +start+ itself is a blocking method.
	#
	def shutdown
		@log.info "SNMP agent stopping"
		@socket.close
	end

	# Open the socket.  Call this early if you want to drop elevated
	# privileges before starting the agent itself.
	def open_socket
		@socket = UDPSocketPool.new(@log, @address, @port)
	end

	private
	def process_get_request(message)
		response = message.response
		response.pdu.varbind_list.each do |v|
			@log.debug "GetRequest OID: #{v.name}, #{message.community}"
			v.value = get_snmp_value(v.name, message.community)
		end

		response
	end

	def process_get_next_request(message)
		response = message.response
		response.pdu.varbind_list.length.times do |idx|
			v = response.pdu.varbind_list[idx]
			@log.debug "OID: #{v.name}"
			v.name = next_oid_in_tree(v.name)
			@log.debug "pgnr: Next OID is #{v.name.to_s}"
			if SNMP::EndOfMibView == v.name
				@log.debug "Setting error status"
				v.name = ObjectId.new('0')
				response.pdu.error_status = :noSuchName
				response.pdu.error_index = idx
			else
				@log.debug "Regular value"
				v.value = get_snmp_value(v.name)
			end
		end
	
		response
	end
	
	def get_snmp_value(oid, community = nil)
		@log.debug("get_snmp_value(#{oid.to_s})")
		data_value = get_mib_entry(oid, community).value
		
		if data_value.is_a? ::Integer
			SNMP::Integer.new(data_value)
		elsif data_value.is_a? String
			SNMP::OctetString.new(data_value)
		elsif data_value.nil?
			SNMP::NoSuchObject
		elsif data_value.respond_to? :asn1_type
			# Assuming that we got given back a literal SNMP type
			data_value
		else
			SNMP::OctetString.new(data_value.to_s)
		end
	end
	
	def get_mib_entry(oid, community = nil)
		@log.debug "Looking for MIB entry #{oid.to_s}"
		oid = ObjectId.new(oid) unless oid.is_a? ObjectId
		@mib_tree.get_node(oid, community)
	end

	def next_oid_in_tree(oid)
		@log.debug "Looking for the next OID from #{oid.to_s}"
		oid = ObjectId.new(oid) unless oid.is_a? ObjectId
		
		next_oid = @mib_tree.next_oid_in_tree(oid)
		
		if next_oid.nil?
			next_oid = SNMP::EndOfMibView
		end
		
		next_oid
	end
		
end

class MibNode  # :nodoc:
	# Create a new MibNode (of some type)
	#
	# This is quite a tricky piece of work -- we have to work out whether
	# we're being asked to create a MibNodeTree (initial_data is a hash or
	# array), a MibNodeValue (initial_data is some sort of scalar), a
	# MibNodeProxy (initial_data consists of :host and :port), or a
	# MibNodePlugin (a block was given).
	#
	# What comes out the other end is something that will respond to the
	# standard MibNode interface, whatever it may be underneath.
	#
	def self.create(initial_data = {}, opts = {}, &block)
		if initial_data.respond_to? :next_oid_in_tree
			return initial_data
		end

		if initial_data.instance_of? Array
			initial_data = initial_data.to_hash
		end

		if initial_data.is_a? Hash
			initial_data.merge! opts
			if block_given?
				return MibNodePlugin.new(initial_data, &block)
			elsif initial_data.keys.member? :host and initial_data.keys.member? :port
				return MibNodeProxy.new(initial_data)
			else
				return MibNodeTree.new(initial_data.merge(opts))
			end
		else
			return MibNodeValue.new({:value => initial_data}.merge(opts))
		end
	end
end

class MibNodeTree < MibNode  # :nodoc:
	def initialize(initial_data = {})
		@log = initial_data.keys.include?(:logger) ? initial_data.delete(:logger) : Logger.new('/dev/null')
		@subnodes = Hash.new { |h,k| h[k] = SNMP::MibNodeTree.new(:logger => @log) }

		initial_data.keys.each do |k|
			raise ArgumentError.new("MIB key #{k} is not an integer") unless k.is_a? ::Integer
			@subnodes[k] = MibNode.create(initial_data[k], :logger => @log)
		end
	end

	def to_hash
		output = {}
		keys.each do |k|
			output[k] = @subnodes[k].respond_to?(:to_hash) ? @subnodes[k].to_hash : @subnodes[k]
		end
		
		output
	end

	def empty?
		length == 0
	end

	def value
		nil
	end
	
	def get_node(oid, community = nil)
		oid = ObjectId.new(oid)
		@log.debug("get_node(#{oid.to_s})")

		next_idx = oid.shift
		if next_idx.nil?
			# End of the road, bud
			return self
		else
			return sub_node(next_idx).get_node(oid, community)
		end
	end
	
	def add_node(oid, node)
		oid = ObjectId.new(oid) unless oid.is_a? ObjectId
		@log.debug("Adding a #{node.class} at #{oid.to_s}")

		sub = oid.shift

		if oid.length == 0
			if @subnodes.has_key? sub
				raise ArgumentError.new("OID #{oid} is already occupied by something; cannot put a node here")
			else
				@log.debug("Inserted")
				@subnodes[sub] = node
				@log.debug("#{self.object_id}.subnodes[#{sub}] is now a #{@subnodes[sub].class}")
			end
		else
			@subnodes[sub].add_node(oid, node)
		end
	end

	# Return the path down the 'left' side of the MIB tree from this point.
	# The 'left' is, of course, the smallest node in each subtree until we
	# get to a leaf.  It is possible that the subtree doesn't contain any
	# actual data; in this instance, left_path will return nil to indicate
	# "no tree here, look somewhere else".
	def left_path()
		@log.debug("left_path")
		path = nil
		
		keys.sort.each do |next_idx|
			@log.debug("Boink (#{next_idx})")
			# Dereference into the subtree. Let's see what we've got here, shall we?
			next_node = sub_node(next_idx)
		
			path = next_node.left_path()
			unless path.nil?
				# Add ourselves to the front of the path, and we're done
				path.unshift(next_idx)
				return path
			end
		end
		
		# We chewed through all the keys and all the subtrees were completely
		# empty.  Bugger.
		return nil
	end

	# Return the next OID strictly larger than the given OID from this node.
	# Returns nil if there is no larger OID in the subtree.
	def next_oid_in_tree(oid)
		@log.debug("MibNodeTree#next_oid_in_tree(#{oid})")
		oid = ObjectId.new(oid)

		# End of the line, bub
		return self.left_path if oid.length == 0

		sub = oid.shift

		next_oid = sub_node(sub).next_oid_in_tree(oid)
		
		@log.debug("Got #{next_oid.inspect} from call to subnodes[#{sub}].next_oid_in_tree(#{oid.to_s})")
		
		if next_oid.nil?
			@log.debug("No luck asking subtree #{sub}; how about the next subtree(s)?")
			sub = @subnodes.keys.sort.find { |k|
				if k > sub
					@log.debug("Examining subtree #{k}")
					!sub_node(k).left_path.nil?
				else
					false
				end
			}
			
			if sub.nil?
				@log.debug("This node has no valid next nodes")
				return nil
			end
			
			next_oid = sub_node(sub).left_path
		end
		
		if next_oid.nil?
			# We've got no next node below us
			return nil
		else
			# We've got a next OID to go to; append ourselves to the front and
			# send it back up the line
			next_oid.unshift(sub)
			@log.debug("The next OID for #{oid.inspect} is #{next_oid.inspect}")
			return ObjectId.new(next_oid)
		end
	end

	private
	def sub_node(idx)
		@log.debug("sub_node(#{idx.inspect})")
		raise ArgumentError.new("Index [#{idx}] must be an integer in a MIB tree") unless idx.is_a? ::Integer
		
		# Dereference into the subtree. Let's see what we've got here, shall we?
		@log.debug("#{self.object_id}.subnodes[#{idx}] is a #{@subnodes[idx].class}")
		@subnodes[idx]
	end

	def keys
		@subnodes.keys
	end
	
	def length
		@subnodes.length
	end
end

class MibNodePlugin < MibNode  # :nodoc:
	def initialize(opts = {}, &block)
		@log = opts[:logger].nil? ? Logger.new('/dev/null') : opts[:logger]
		@plugin_timeout = opts[:plugin_timeout] ? 2 : opts[:plugin_timeout]
		@proc = block
		@oid = opts[:oid]
		@cached_value = nil
		@cache_until = 0
	end

	def value
		nil
	end

	def to_hash
		plugin_value.to_hash
	end
	
	def get_node(oid, community = nil)
		@log.debug("plugin get_node(#{oid.to_s}, #{community.to_s})")
		val = plugin_value(community)
		val.get_node(oid, community) if val.respond_to? :get_node
	end

	def add_node(oid, node)
		raise ArgumentError.new("Adding this plugin would encroach on the subtree of an existing plugin")
	end

	def left_path
		plugin_value.left_path
	end

	def next_oid_in_tree(oid)
		val = plugin_value
		val.next_oid_in_tree(oid) if val.respond_to? :next_oid_in_tree
	end
	
	private
	def plugin_value community = nil
		@log.debug("Getting plugin value")
		if Time.now.to_i > @cache_until
			begin
				plugin_data = nil
				Timeout::timeout(@plugin_timeout) do
					plugin_data = @proc.call community
				end
			rescue Timeout::Error
				@log.warn("Plugin for OID #{@oid} exceeded the timeout")
				return MibNodeValue.new(:logger => @log, :value => nil)
			rescue DontReplyException => e
				# Just pass it on up the chain
				raise e
			rescue => e
				@log.warn("Plugin for OID #{@oid} raised an exception: #{e.message}\n#{e.backtrace.join("\n")}")
				return MibNodeValue.new(:logger => @log, :value => nil)
			end

			if plugin_data.instance_of? Array
				plugin_data = plugin_data.to_hash
			end

			if plugin_data.is_a? Hash
				unless plugin_data[:cache].nil?
					@cache_until = Time.now.to_i + plugin_data[:cache]
					plugin_data.delete :cache
				end
			end
			
			@cached_value = MibNode.create(plugin_data, :logger => @log)
		end
		
		@cached_value
	end
end

class MibNodeProxy < MibNode  # :nodoc:
	def initialize(opts)
		@base_oid = SNMP::ObjectId.new(opts[:base_oid])
		@manager = SNMP::Manager.new(:Host => opts[:host], :Port => opts[:port])
		@log = opts[:logger] ? opts[:logger] : Logger.new('/dev/null')
	end
	
	def get_node(oid, community = nil)
		oid = SNMP::ObjectId.new(oid) unless oid.is_a? SNMP::ObjectId
		
		complete_oid = ObjectId.new(@base_oid + oid)
		
		rv = @manager.get([complete_oid])
		
		MibNodeValue.new(:value => rv.varbind_list[0].value)
	end
	
	def add_node(oid, node)
		raise ArgumentError.new("Cannot add a node inside a MibNodeProxy")
	end

	def left_path()
		next_oid_in_tree(@base_oid)
	end

	def next_oid_in_tree(oid)
		oid = SNMP::ObjectId.new(oid) unless oid.is_a? SNMP::ObjectId
		
		complete_oid = ObjectId.new(@base_oid + oid)
		
		rv = @manager.get_next([complete_oid])
		
		next_oid = rv.varbind_list[0].name
		
		if next_oid.subtree_of? @base_oid
			# Remember to only return the interesting subtree portion!
			next_oid[@base_oid.length..-1]
		else
			nil
		end
	end
end

class MibNodeValue < MibNode  # :nodoc:
	include Comparable
	
	attr_reader :value
	
	def initialize(opts)
		@value = opts[:value]
		@log = Logger.new('/dev/null')
	end

	def <=>(other)
		@value.nil? or other.nil? ? 0 : @value <=> other.value
	end

	def get_node(oid, community = nil)
		oid.length == 0 ? self : MibNodeTree.new
	end
	
	def add_node(oid, node)
		RuntimeError.new("You really shouldn't do that")
	end
	
	def left_path()
		value.nil? ? nil : []
	end
	
	def next_oid_in_tree(oid)
		nil
	end
end

# To signal that the agent received a message that it didn't know how to
# handle.
class UnknownMessageError < StandardError
end

end

class Array  # :nodoc:
	def keys
		k = []
		length.times { |v| k << v }
		k
	end
	
	def to_hash
		h = {}
		keys.each {|k| h[k] = self[k]}
		h
	end
end

class NilClass  # :nodoc:
	def value
		nil
	end
end

class UDPSocketPool
	def initialize(log, address, port)
		@socket_list = {}
		@port = port
    @address = address
		@log = log
		
		init_socket_list
	end

	def self.listen(port, &block)
		pool = UDPSocketPool.new(port)
		
		pool.listen(&block)
	end
	
	def listen
		raise RuntimeError.new("No block given to UDPSocketPool#listen") unless block_given?

		loop do
			ready = IO::select(@socket_list.values)[0]
		
			ready.each do |s|
				data, origin = s.recvfrom(65535)
				if s == @socket_list['0.0.0.0']
					# We don't explicitly handle data received by the 'any'
					# socket, we just use it to trigger a rescan
					init_socket_list
				else
					result = yield(data)
					s.send(result, 0, origin[3], origin[1]) unless result.nil?
				end
			end
		end
	end
	
	def close
		@socket_list.values.each {|s| s.close}
	end
		
	private
	def init_socket_list
		addrs = [@address]
		@log.info("Binding to #{@address}")
		addrs.each do |a|
			next if @socket_list.keys.include? a
			@socket_list[a] = ::UDPSocket.new
			@socket_list[a].setsockopt(Socket::SOL_SOCKET,
			                           Socket::SO_REUSEADDR, 
			                           1)
			@socket_list[a].bind(a, @port)
		end
	end
end

# Exception to be raised by a plugin if it really, really, really doesn't
# want to have anything at all to do with this request.
class DontReplyException < Exception
end

if __FILE__ == $0
	agent = SNMP::Agent.new(:address => '10.0.0.1', :port => 1061, :logger => Logger.new(STDOUT))
	trap("INT") { agent.shutdown }
	agent.start
end
