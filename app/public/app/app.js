'use strict';

var angular = require('angular'),
    uiRouter = require('angular-ui-router'),
    canvas = require('./canvas');

angular.module('app', [
  // Libs
  'ui.router',

  // Modules
  'app.canvas'
]);

console.log('app.js');
