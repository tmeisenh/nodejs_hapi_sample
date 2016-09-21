"use strict";

var Hapi = require('hapi');

function PeopleHandler(){};
PeopleHandler.prototype = (function(){
	return {
		create: function create(request, reply) {
      var json = { random_id: 1, first_name: 'Travis', mi_name: 'B', 
        last_name: 'Meisenheimer', full_name: 'Travis B Meisenheimer',
        national_id: '8675309', random_value: 69 };

      var connection = request.server.plugins['hapi-mongoose'].connection;
      connection.model('people').create(json, function (err, created_person) {
        if (err) {
          reply({message : 'failed to create'});
        } else {
          reply({message : 'created ' + created_person });
        }
      });
    },
    list: function list(request, reply) {
      var connection = request.server.plugins['hapi-mongoose'].connection;
      connection.model('people').find({}, function (err, people) {
        if (err) {
          reply({message : 'failed to list'});
        } else {
          reply({'message' : 'list', 'all_people': people});
        }
      });
    },
    remove: function remove(request, reply) {
      var connection = request.server.plugins['hapi-mongoose'].connection;
      connection.model('people').remove({}, function (err) {
        if (err) {
          reply({message : 'failed to delete'});
        } else {
          reply({'message' : 'deleted all people'});
        }
      });
    }
  }
})();

var peopleHandler = new PeopleHandler();
module.exports = peopleHandler;
