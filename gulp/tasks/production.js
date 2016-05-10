var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('production', function() {
  gulp.src('./build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./production/'));

  gulp.src('./build/*.css')
    .pipe(gulp.dest('./production/'));

  gulp.src('./build/*.html')
    .pipe(gulp.dest('./production/'));

  gulp.src('./build/fonts')
    .pipe(gulp.dest('./production/'));
});