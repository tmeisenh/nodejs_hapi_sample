"use strict";

var Hapi = require('hapi');

function HelloHandler(){};
HelloHandler.prototype = (function(){

  return {
    hello: function hello(request, reply) {
      reply('hello world!');
    },
  }
})();

var helloHandler = new HelloHandler();
module.exports = helloHandler;
