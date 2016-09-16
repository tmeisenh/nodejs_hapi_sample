"use strict";

var helloController = require('src/controllers/hello');

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/hello',
			config : {
				handler: helloController.hello,
			}
		},
		{
			method: 'POST',
			path: '/hello',
			config : {
				handler: helloController.hello,
			}
		}
	];
}();
