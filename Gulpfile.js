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
var lessRoot = 'app/public/styles/';
var cssRoot = 'public/';

gulp.task('styles', function() {
  return gulp.src(lessRoot + 'style.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssRoot));
})

gulp.task('build', ['less'], function() {
  return gulp.src(cssRoot + 'style.css') // DOES NOT WORK.........................
    .pipe(cssmin({keepSpecialComments:0}))
    .pipe(gulp.dest(cssRoot));
});

gulp.task('scripts', function() {
  return browserify('./app/public/app/app.js')
    .bundle()
    .on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(source('all.js'))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', function () {
  server.listen();
  gulp.watch('app/public/styles/**/*.less', ['styles']);
  gulp.watch('app/public/app/**/*.js', ['scripts']);
  gulp.watch(['public/style.css','public/all.js',]).on('change', function(file) {
    server.changed(file.path);
  });
});
