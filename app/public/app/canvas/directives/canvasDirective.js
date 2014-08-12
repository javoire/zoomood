'use strict';

module.exports = function() {
  return {
    restrict: 'A',
    scope: true,
    controller: 'CanvasCtrl',
    link: function(scope, element, attrs) {
      console.log('zoomoodCanvasDirective');
    }
  }
}
