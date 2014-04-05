var config = require('./lib/config').Config(__dirname+'/config.ini').get();
var logger = require('./lib/logger').Logging().get('project-debug.log');

var winstonStream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

// Import utilities
var util = require('util');

// Load data logic module
var logic = require('./lib/logic');

// Set up websocket server using socket.io
var pushServerApp = require('express')()
var pushServer = require('http').createServer(pushServerApp)
var io = require('socket.io').listen(pushServer,
{
  logger: {
    debug: logger.debug, 
    info: logger.info, 
    error: logger.error, 
    warn: logger.warn
  }
 });

io.set('log level', 1);
var express = require('express');

pushServer.listen(config.analytics.port, function() {
  logger.log('info', 'Analytics server listening at http://0.0.0.0:%d', 
    config.analytics.port);
});

// Allow clients to subscribe to paths
io.sockets.on('connection', function(socket) {
    socket.on('subscribe', function(room) {
    socket.join(room);
  });
});

// Serve static HTML page for websocket server
pushServerApp.configure(function () {
  pushServerApp.use( express.cookieParser() );
  pushServerApp.use( express.session({secret: 'secret', key: 'express.sid'}) );
  pushServerApp.use( pushServerApp.router )
  pushServerApp.use(express.logger({stream:winstonStream}));
});

// Redirect the root to the dashboard
pushServerApp.get('/', function (request, response) {
  response.redirect('/dashboard');
});

// Display documentation of all available paths
pushServerApp.get('/docs', function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(logic.documentation());
});

// Set up REST API server
pushServerApp.get('*', function(request, response, next) {
    // Hand over to next route in case request is for the dashboard
    if ( request.url.indexOf('dashboard') != -1 ) {
      next();
    }
    var path = request.url.substring(1);
    path = path.replace(/\//g, '.').toLowerCase();
    data = logic.retrieve(path, false, function(data) {
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(data);
    });
});

// Serve static assets as well
pushServerApp.use( express.static(__dirname+'/html') );

// Main event loop
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
  , config.analytics.frequency
);
