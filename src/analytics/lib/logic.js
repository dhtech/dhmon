var util = require('util');

// Load Graphite API
var graphite = require('./graphite-api');
var graphiteClient = graphite.createClient('http://172.16.20.1:9000');

// Connect to Redis
var redis = require('redis');
var db = redis.createClient();


var someExamplePath = function(callback) {
graphiteClient.query('server.rojter.load', {'from': '-1min'}, function(data) {
    callback(data[0]["datapoints"][0][0]);
  });
};

var documentation = function() {
  html = "<h1>Avaiable Calls</h1>";
  for ( path in paths ) {
    url = path.replace(".", "/", path);
    html += util.format("<h2>%s</h2><pre>GET /%s</pre><span>%s</span>",
        path, url, paths[path]["what"]);
  }
  return html;
}

var paths = {
  "some.example.path": {
    "method": someExamplePath,
    "what": "An example path"
  }
};

var updateCache = function(path, data, callback) {
  data = JSON.stringify(data);
  db.set(path, data, 'NX', 'EX', 60, function(err, reply) {
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
      var cache = db.get(path, function(err, reply) {
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
