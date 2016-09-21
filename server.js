'use strict';

const Hapi = require('hapi');
var routes = require('./src/routes');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
  host: '0.0.0.0', 
  port: 3131
});

server.route(routes);

// Start the server
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
