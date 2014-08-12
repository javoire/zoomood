'use strict';

var canvasDirective = require('./canvasDirective'),
    CanvasCtrl = require('./CanvasCtrl'),
    CanvasService = require('./CanvasService');

module.exports = angular.module('app.canvas', [])
  .directive('zoomoodCanvas', canvasDirective)
  .controller('CanvasCtrl', CanvasCtrl)
  .service('CanvasService', CanvasService);
