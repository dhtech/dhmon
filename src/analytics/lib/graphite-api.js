var logger = require('./logger').Logging().get('project-debug.log');
var util = require('util');
var request = require('request');

var GraphiteAPI = function(server_url) {
  this.server_url = server_url;
};

exports.GraphiteAPI = GraphiteAPI;

GraphiteAPI.prototype.query = function(query, options, callback) {
  logger.debug('Got query:', query);
  query = encodeURIComponent(query);
  options = typeof options !== 'undefined' ? options : {};
  var url = util.format("%s/render?target=%s&format=json", this.server_url, query);
  for (var option in options) {
    url += util.format("&%s=%s", option, options[option]);
  }
  logger.debug('Querying Graphite at URL:', url);
  request(url, function (error, response, body) {
   if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      callback(data);
    } else {
      logger.error('Error while querying Graphite:', error);
      callback(null);
    }
  });
};

var createClient = function(server_url) {
  return new GraphiteAPI(server_url);
}

exports.createClient = createClient;
