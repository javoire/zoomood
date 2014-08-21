describe('CanvasService', function() {
  var CanvasService, httpBackend;

  beforeEach(module('app.canvas'));

  beforeEach(inject(function(_CanvasService_/*, $httpBackend*/){
    CanvasService = _CanvasService_;
    // httpBackend = $httpBackend;
  }));

  it('has a defined fabricCanvas', function() {
    expect(CanvasService.fabricCanvas).toBeDefined();
  });

  it('has a defined socket', function() {
    expect(CanvasService.socket).toBeDefined();
  });
})
