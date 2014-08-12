describe('CanvasService', function() {
  var CanvasService;

  beforeEach(module('app.canvas'));

  beforeEach(inject(function(_CanvasService_){
    CanvasService = _CanvasService_;
  }));

  it('has an instance of fabric Canvas', function() {
    expect(CanvasService.fabricCanvas).toBeDefined();
  });

  it('has an instance of socket', function() {
    expect(CanvasService.socket).toBeDefined();
  });
})
