dhmon/analytics
=====

Almost real-time analytics server in Node.js

## Install

Dependencies are handled by the Node Package Manager (npm).

To install on Debian:

    echo "deb http://ftp.us.debian.org/debian wheezy-backports main" >> /etc/apt/sources.list
    apt-get update
    apt-get install nodejs-legacy curl
    wget https://www.npmjs.org/install.sh
    bash install.sh

Install dependencies (described in package.json):

    npm install

All data is cached in Redis, so either run Redis locally or make sure you can connect to an instance somewhere.

## Structure/API


### Defining the data

Analytics uses a namespace similar to Graphite: ```some.example.path```

All the analytical data served by the analytics server is defined in ```lib/logic.js```:

    var paths = {                                                                    
        "some.example.path": {                                                         
        "method": someExamplePath,                                                   
        "what": "An example path"                                                    
        }                                                                              
    };

where ```someExamplePath``` could be a simple function like:

    var someExamplePath = function(callback) {                                       
        graphiteClient.query('server.rojter.load', {'from': '-1min'}, function(data) { 
            callback(data[0]["datapoints"][0][0]);                                       
        });                                                                            
    };

which simply queries a Graphite instance for the load on a server called rojter for the past minute and hands the first data point to the callback function.

### Using the data

By default the analytics server supports queries using simple HTTP GET request, as well as providing the ability for clients to subscribe to near real-time data through websockets.

#### Standard HTTP GET

To get the data we defined in the example above, we could either call

    GET /some.example.path

or

    GET /some/example/path

#### Websockets

To subscribe to any new data on ```some.example.path```:

    var socket = io.connect('http://localhost');                                   
    socket.emit('subscribe', 'some.example.path');                                 
        socket.on('some.example.path', function (data) {                               
            console.log(data);
    });
