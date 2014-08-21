'use strict';

var angular = require('angular');

require('./templates/home.ngt'); // no module.exports

angular.module('app', [
  // Libs
  require('angular-ui-router'),

  // Templates
  'templates',

  // Modules
  require('./canvas').name
])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.ngt'
      })
  })
