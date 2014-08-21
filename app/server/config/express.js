var express = require('express'),
    path = require('path'),
    upload = require('jquery-file-upload-middleware');

module.exports = function(app, config) {
  app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', config.root + '/app/server/views');
  // app.use(express.logger('dev'));
  app.use('/upload', upload.fileHandler());
  app.use(express.bodyParser());
  app.set('view engine', 'jade');
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(config.root, 'public')));
  });

  app.configure('development', function() {
  app.use(express.errorHandler());
  });
}
