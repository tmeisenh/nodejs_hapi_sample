"use strict";

var Hapi = require('hapi');

function HelloController(){};
HelloController.prototype = (function(){

	return {
		hello: function hello(request, reply) {
			reply('hello world!');
		},
	}
})();

var helloController = new HelloController();
module.exports = helloController;
