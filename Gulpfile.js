'use strict';

// plugins
var gulp  = require('gulp'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    server = require('gulp-livereload'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    autoprefixer = require('gulp-autoprefixer');

// other vars
var cssRoot = 'public/css/';

gulp.task('less', function() {
  gulp.src(cssRoot + 'less/style.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssRoot));
})

gulp.task('build', ['less'], function() {
  gulp.src(cssRoot + 'style.css') // DOES NOT WORK.........................
    .pipe(cssmin({keepSpecialComments:0}))
    .pipe(gulp.dest(cssRoot));
});

gulp.task('scripts', function() {
   return browserify('./public/js/app/main.js')
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('./public/js'));
});

gulp.task('default', function () {
  server.listen();
  gulp.watch('public/css/less/**/*.less', ['less']);
  gulp.watch('public/js/app/**/*.js', ['scripts']);
  gulp.watch(['public/**/*.css','**/*/app.js',]).on('change', function(file) {
    server.changed(file.path);
  });
});
