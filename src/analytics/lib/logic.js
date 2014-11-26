// TODO(bluecmd): Replace the config file to use /etc/dhmon.yaml where sensible
var config = require('./config').Config(__dirname+'/config.ini').get();
var logger = require('./logger').Logging().get('project-debug.log');
var util = require('util');

// Connect to Redis
var redis = require('redis');
var db = redis.createClient(config.redis.port, config.redis.host);

// Connect to Memcache
var Memcached = require('memcached');
var memcached = new Memcached('dhmon.event.dreamhack.se:11211');

var switchesStatus = function(callback) {
  db.zrange('metric:ipplan-pinger.us', 0, -1, 'withscores',
            function(err, data) {
    var metrics = {};
    var switches = {};
    for ( var i = 0; i < data.length; i+=2 ) {
      var entry = JSON.parse(data[i]);
      metric = 'last:' + entry['host'] + '.ipplan-pinger.us';
      var name = entry['host'];
      metrics[metric] = name;

      // The score is integer with ms precision
      var last_beat = ((new Date().getTime()) - data[i+1])/1000;
      if (switches[name] < last_beat)
        continue
      switches[name] = last_beat;
    }

    // Get latest response from memcached to get low-latency updates
    memcached.getMulti(Object.keys(metrics), function(err, memdata) {
      for ( var i in memdata ) {

        var entry = JSON.parse(memdata[i]);
        // The raw entry is using a double with second precision
        switches[metrics[i]] = Math.floor(
            (new Date().getTime())/1000.0 - entry['time']);
        logger.debug('memdata', i, memdata[i], entry['time']);
      }
      callback(switches);
    });
  });
};

var snmpErrors = function(callback) {
  db.zrange('metric:snmpcollector.no-model.str', 0, -1, 'withscores',
            function(err, data) {
    var hosts = {};
    for ( var i = 0; i < data.length; i+=2 ) {
      var entry = JSON.parse(data[i]);
      var last_beat = ((new Date().getTime()) - data[i+1])/1000;
      hosts[entry['host']] = {'error': entry['value'], 'since': last_beat};
    }
    callback(hosts);
  });
};

var documentation = function() {
  html = "<h1>Available Calls</h1>";
  for ( path in paths ) {
    url = path.replace(".", "/", path);
    html += util.format("<h2>%s</h2><pre>GET /%s</pre><span>%s</span>",
        path, url, paths[path]["what"]);
  }
  return html;
}

var paths = {
  "switches.status": {
    "method": switchesStatus,
    "what": "Status of all switched currently being polled"
  },
  "snmp.errors": {
    "method": snmpErrors,
    "what": "List of all recent SNMP collection errors"
  }
};

var updateCache = function(path, data, callback) {
  logger.debug('Updating cache for path:', path);
  data = JSON.stringify(data);
  db.set('analytics:' + path, data, 'NX', 'EX', 10, function(err, reply) {
    callback(data);
  });
};

var retrieve = function(path, refresh, callback) {
  if ( paths.hasOwnProperty(path) ) {
    var method = paths[path]["method"];
    if ( refresh ) {
      method(function(data) {
        updateCache(path, data, callback)
      });
    } else {
      var cache = db.get('analytics:' + path, function(err, reply) {
        if ( typeof reply != 'undefined' && reply ) {
          callback(reply);
        } else {
          method(function(data) {
            updateCache(path, data, callback);
          });
        }
      });
    }
  }
};

exports.retrieve = retrieve;
exports.documentation = documentation;
exports.paths = paths;
