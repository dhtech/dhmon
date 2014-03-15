// Load Graphite API
var graphite = require('./graphite-api');
var graphiteClient = graphite.createClient('http://172.16.20.1:9000');

// Connect to Redis
var redis = require('redis');
var db = redis.createClient();

var someExamplePath = function() {
  return { "some": (new Date).getTime() }
};

var paths = {
  "some.example.path": someExamplePath 
};

var updateCache = function(path, data, callback) {
  data = JSON.stringify(data);
  db.set(path, data, 'NX', 'EX', 60, function(err, reply) {
    callback(data);
  });
};

var retrieve = function(path, refresh, callback) {
  if ( paths.hasOwnProperty(path) ) {
    var method = paths[path];
    if ( refresh ) {
      var data = method();
      updateCache(path, data, callback);
    } else {
      var cache = db.get(path, function(err, reply) {
        if ( typeof reply != 'undefined' && reply ) {
          callback(reply);
        } else {
          var data = method();
          updateCache(path, data, callback);
        }
      });
    }
  }
};

exports.retrieve = retrieve;
exports.paths = paths;
