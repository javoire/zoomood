'use strict';

// plugins
var gulp  = require('gulp'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    server = require('gulp-livereload'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    autoprefixer = require('gulp-autoprefixer'),
    ngHtml2Js = require('browserify-ng-html2js'),
    html2Js = require('html2js-browserify'), //
    es = require('event-stream'), //
    concat = require('gulp-concat');

// other vars
var assetsRoot  = 'app/client/assets/';
var serverRoot  = 'app/server/';
var publicRoot  = 'public/';
var lessRoot    = assetsRoot + 'style/';

var errorHandler = function(err) {
  console.log(err.toString());
  this.emit('end');
}

//-------------------------------
// Development
//-------------------------------
// console.log('!'+lessRoot);
gulp.task('assets', function() { // copy all assets but less to public folder
  return gulp.src([
      assetsRoot+'**/*',
      '!'+lessRoot+'**/*',
      '!'+lessRoot
    ])
    .pipe(gulp.dest(publicRoot));
})

gulp.task('styles', function() { // compile less and output to public folder
  return gulp.src(lessRoot + 'style.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest(publicRoot));
})

gulp.task('scripts', function() { // compile js and output to public folder
  return browserify('./app/client/app/app.js')
    .transform(ngHtml2Js({
      module: 'templates',
      extension: 'ngt'
    }))
    .bundle()
    .on('error', errorHandler)
    .pipe(source('all.js'))
    .pipe(gulp.dest('./public'));
});

//-------------------------------
// Build
//-------------------------------

// gulp.task('build', ['less'], function() {
//   return gulp.src(publicRoot + 'style.css') // DOES NOT WORK.........................
//     .pipe(cssmin({keepSpecialComments:0}))
//     .pipe(gulp.dest(publicRoot));
// });

//-------------------------------
// Watchers
//-------------------------------

gulp.task('default', function () {
  server.listen();

  // LESS
  gulp.watch(assetsRoot+'/style/**/*', ['styles']);
  // ASSETS EXCEPT LESS
  gulp.watch([assetsRoot+'**/*','!'+assetsRoot+'/style/**/*'], ['assets']);
  // SCRIPTS
  gulp.watch(['app/client/app/**/*','!**/*.spec'], ['scripts']);

  // LIVERELOAD
  gulp.watch(['public/style.css','public/all.js','app/server/**/*']).on('change', function(file) {
    server.changed(file.path);
  });
});
