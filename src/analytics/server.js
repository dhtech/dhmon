// Set up logging
var logger = require('caterpillar').createLogger( { level: 7 });
var filter = require('caterpillar-filter').createFilter();
var human = require('caterpillar-human').createHuman();
logger.pipe(filter).pipe(human).pipe(process.stdout);

// Import utilities
var util = require('util');

// Load data logic module
var logic = require('./lib/logic');

// Set up websocket server using socket.io
var pushServerApp = require('express')()
var pushServer = require('http').createServer(pushServerApp)
var io = require('socket.io').listen(pushServer);

pushServer.listen(8000, function() {
  logger.log('info', 'Push API server listening at http://0.0.0.0:8000');
});

// Allow clients to subscribe to paths
io.sockets.on('connection', function(socket) {
    socket.on('subscribe', function(room) {
    socket.join(room);
  });
});

// Serve static HTML page for websocket server
pushServerApp.get('/', function (req, res) {
  res.sendfile(__dirname + '/html/index.html');
 });

setInterval( 
  function(){
    for ( path in io.sockets.manager.rooms ) {
      if ( path ) {
       path = path.substring(1);
       logic.retrieve(path, true, function(data) {
        io.sockets.in(path).emit(path, data);
       });
      }
    } 
  }
  , 10000
);

// Set up REST API server
var http = require('http');
var url = require('url');
var restServer = http.createServer(
  function (request, response) {
    var path = url.parse(request.url, true).path.substring(1);
    path = path.replace(/\//g, '.').toLowerCase();
    data = logic.retrieve(path, false, function(data) {
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(data);
    });
  }
);

restServer.listen(8080, function() {
  logger.log('info', 'REST API server listening at http://0.0.0.0:8080');
});
