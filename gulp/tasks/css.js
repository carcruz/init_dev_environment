var gulp = require('gulp');
var browserSync = require('browser-sync');
var handleErrors = require('../util/handleErrors');
var sass = require('gulp-sass');

// gulp.task('css', ['images','theme'], function () {
gulp.task('css', ['images'], function () {
  return gulp.src( 'src/style/index.scss')
    .pipe(sass().on('error', handleErrors))
    .pipe(gulp.dest('./build/'))
    .pipe(browserSync.reload({stream: true}));
});

