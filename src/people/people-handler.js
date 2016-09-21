"use strict";

var Hapi = require('hapi');

function PeopleHandler(){};
PeopleHandler.prototype = (function(){

  return {
    create: function create(request, reply) {
      reply({message : 'create'});
    },
    list: function list(request, reply) {
      reply({message : 'list'});
    },
  }
})();

var peopleHandler = new PeopleHandler();
module.exports = peopleHandler;
