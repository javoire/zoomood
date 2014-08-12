'use strict';

var canvasDirective = require('./directives/canvasDirective'),
    CanvasCtrl = require('./controllers/CanvasCtrl'),
    CanvasService = require('./services/CanvasService');

module.exports = angular.module('app.canvas', [])
  .directive('zoomoodCanvas', canvasDirective)
  .controller('CanvasCtrl', CanvasCtrl)
  .service('CanvasService', CanvasService);
