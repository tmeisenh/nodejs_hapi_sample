"use strict";

var hellohandler = require('./hello-handler');

module.exports = function() {
	return [
	{
		method: 'GET',
		path: '/hello',
		config : {
			handler: hellohandler.hello,
		}
	},
	{
		method: 'POST',
		path: '/hello',
		config : {
			handler: hellohandler.hello,
		}
	}
	];
}();
