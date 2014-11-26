// TODO(bluecmd): Replace the config file to use /etc/dhmon.yaml where sensible
var config = require('./config').Config(__dirname+'/config.ini').get();
var logger = require('./logger').Logging().get('project-debug.log');
var util = require('util');

// Set up ipplan
var ipplan = require('./ipplan');
var ipplanDB = ipplan.init(config.ipplan.file);

// Connect to Redis
var redis = require('redis');
var db = redis.createClient(config.redis.port, config.redis.host);

// Connect to Memcache
var Memcached = require('memcached');
var memcached = new Memcached('dhmon.event.dreamhack.se:11211');

var eventHosts = function(callback) {
  ipplanDB.getEventHosts(function(objects) {
    dict = {};
    for (var idx in objects) {
      var row = objects[idx];
      if (!dict.hasOwnProperty(row['host']))
        dict[row['host']] = {'options': {}};
      dict[row['host']].options[row['option']] = row['value'];
    }
    callback(dict);
  });
}

var pingStatus = function(callback) {
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

function redisMetricToDict(key, property, callback) {
  db.zrange(key, 0, -1, 'withscores', function(err, data) {
    var hosts = {};
    for ( var i = 0; i < data.length; i+=2 ) {
      var entry = JSON.parse(data[i]);
      var last_beat = ((new Date().getTime()) - data[i+1])/1000;
      hosts[entry['host']] = {'since': last_beat};
      hosts[entry['host']][property] = entry['value'];
    }
    callback(hosts);
  });
}

var rancidStatus = function(callback) {
  db.zrange('metric:rancid.size', 0, -1, function(err, data) {
    var hosts = {};
    for ( var i = 0; i < data.length; i++ ) {
      var entry = JSON.parse(data[i]);
      hosts[entry['host']] = {'size': entry.value};
    }
    db.zrange('metric:rancid.updated', 0, -1, function(err, data) {
      for ( var i = 0; i < data.length; i++ ) {
        var entry = JSON.parse(data[i]);
        hosts[entry['host']].since = entry.value;
      }
      callback(hosts);
    });
  });
};

var syslogStatus = function(callback) {
  db.zrange('metric:syslog.size', 0, -1, function(err, data) {
    var hosts = {};
    for ( var i = 0; i < data.length; i++ ) {
      var entry = JSON.parse(data[i]);
      hosts[entry['host']] = {'size': entry.value};
    }
    db.zrange('metric:syslog.updated', 0, -1, function(err, data) {
      for ( var i = 0; i < data.length; i++ ) {
        var entry = JSON.parse(data[i]);
        hosts[entry['host']].since = entry.value;
      }
      callback(hosts);
    });
  });
};

var snmpErrors = function(callback) {
  redisMetricToDict('metric:snmpcollector.no-model.str', 'error', callback);
};

var snmpSaves = function(callback) {
  redisMetricToDict('metric:snmp.metrics.saved', 'metrics', callback);
};

var switchVersion = function(callback) {
  key = 'metric:snmp.1.3.6.1.2.1.47.1.1.1.1.9';
  property = 'version';
  db.zrange(key, 0, -1, 'withscores', function(err, data) {
    var hosts = {};
    for ( var i = 0; i < data.length; i+=2 ) {
      var entry = JSON.parse(data[i]);
      var last_beat = ((new Date().getTime()) - data[i+1])/1000;
      if (entry['lastoid'] != '1')
        continue
      hosts[entry['host']] = {'since': last_beat};
      hosts[entry['host']][property] = entry['value'];
    }
    callback(hosts);
  });
};

function snmpMetricToDict(data) {
  dict = {};
  for ( var i = 0; i < data.length; i++ ) {
    var entry = JSON.parse(data[i]);
    dict[entry['host'] + '@' + entry['lastoid']] = entry['value'];
  }
  return dict;
}

function decodeSnmpValue(raw) {
  if (raw == undefined)
    return '';
  var idx = raw.indexOf(':');
  return raw.substring(idx+1);
}

function assembleInventory(sn, model, alias) {

  sns = snmpMetricToDict(sn);
  models = snmpMetricToDict(model);
  aliases = snmpMetricToDict(alias);

  inventory = {};
  for (oid in sns) {
    inventory[oid] = {
      'sn': decodeSnmpValue(sns[oid]),
      'model': decodeSnmpValue(models[oid]),
      'alias': decodeSnmpValue(aliases[oid])
    };
  }

  return inventory;
}

var inventory = function(callback) {
  db.zrange('metric:snmp.1.3.6.1.2.1.47.1.1.1.1.11', 0, -1,
      function(err, sn_data) {
        db.zrange('metric:snmp.1.3.6.1.2.1.47.1.1.1.1.13', 0, -1,
          function(err, model_data) {
            db.zrange('metric:snmp.1.3.6.1.2.1.47.1.1.1.1.2', 0, -1,
              function(err, alias_data) {
                callback(assembleInventory(sn_data, model_data, alias_data));
              });
          });
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
  "ping.status": {
    "method": pingStatus,
    "what": "Status of all hosts currently being polled"
  },
  "snmp.errors": {
    "method": snmpErrors,
    "what": "List of all recent SNMP collection errors"
  },
  "snmp.saves": {
    "method": snmpSaves,
    "what": "List of how many metrics recent SNMP collections resulted in"
  },
  "inventory": {
    "method": inventory,
    "what": "List of all inventory information"
  },
  "event.hosts": {
    "method": eventHosts,
    "what": "List of all hosts in the event domain"
  },
  "switch.version": {
    "method": switchVersion,
    "what": "List of all firmwares for switches"
  },
  "rancid.status": {
    "method": rancidStatus,
    "what": "List of all rancid log status"
  },
  "syslog.status": {
    "method": syslogStatus,
    "what": "List of all syslog log status"
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
