"use strict";

// define all routes and just concat them together...
// project structure seems to be in-flux a bit

var hello = require('../hello/hello-routes.js')
var people = require('../people/people-routes.js')

module.exports = function() {
  return [].concat(hello, people);
}();
