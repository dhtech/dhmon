var util = require('util');
var request = require('request');

var GraphiteAPI = function(server_url) {
  this.server_url = server_url;
};

exports.GraphiteAPI = GraphiteAPI;

GraphiteAPI.prototype.query = function(query, options, callback) {
  query = encodeURIComponent(query);
  options = typeof options !== 'undefined' ? options : {};
  var url = util.format("%s/render?target=%s&format=json", this.server_url, query);
  for (var option in options) {
    url += util.format("&%s=%s", option, options[option]);
  }
  request(url, function (error, response, body) {
   if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      callback(data);
    } else {
      callback(null);
    }
  });
};

var createClient = function(server_url) {
  return new GraphiteAPI(server_url);
}

exports.createClient = createClient;
