angular.module('app.directives').directive('zoomoodCanvas', function(CanvasService) {

  console.log(CanvasService);

  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {
      console.log('zoomoodCanvasDirective');
    }
  }
});
