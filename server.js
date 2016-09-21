'use strict';

const Hapi = require('hapi');
const routes = require('./src/routes');
const db = require('./src/config/db');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
  host: '0.0.0.0', 
  port: 3131
});

server.route(routes);

const MongooseOptions =  {
	bluebird: false,
	uri: "mongodb://localhost:27017/people",
};

server.register({
	register: require('hapi-mongoose'),
	options: MongooseOptions
}, (err) => {
	if (err) {
		console.error(err);
		throw err;
	}

	server.start((err) => {
		if (err) {
			throw err;
		}

		console.log('Server running at:', server.info.uri);

		var connection = server.plugins['hapi-mongoose'].connection;
		var mongoose = server.plugins['hapi-mongoose'].lib;
    mongoose.set('debug', true);
    db.initializeModels(connection);
	});
});

