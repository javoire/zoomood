//-------------------------------
// Init
//-------------------------------

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var serverPath = __dirname + '/app/server'

//-------------------------------
// Module dependencies
//-------------------------------

var express = require('express'),
    mongoose = require('mongoose'),
    newrelic = require('newrelic'),
    fs = require('fs'),
    http = require('http'),
    config = require(serverPath + '/config/config')[process.env.NODE_ENV];

//-------------------------------
// App start
//-------------------------------

var app = express();

// DB
mongoose.connect(config.db);

// Bootstrap models
var models_path = serverPath + '/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})

// Config
require(serverPath + '/config/express')(app, config);
require(serverPath + '/config/upload')(app, config);
require(serverPath + '/config/routes')(app);

// Server
var server = http.createServer(app);

// Socket.io
require(serverPath + '/config/socket')(server);

// Start server
server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
