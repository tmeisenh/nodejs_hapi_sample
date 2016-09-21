"use strict";

var peoplehandler = require('./people-handler');

module.exports = function() {
	return [
	{
		method: 'GET',
		path: '/people',
		config : {
			handler: peoplehandler.list,
		}
	},
	{
		method: 'POST',
		path: '/people',
		config : {
			handler: peoplehandler.create,
		}
	},
	{
		method: 'DELETE',
		path: '/people',
		config : {
			handler: peoplehandler.remove,
		}
	}
	];
}();
