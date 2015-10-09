var gulp = require('gulp');

gulp.task('markup-watch', function() {
  return gulp.src( ['src/html/**' ,'!src/html/assets/**', '!src/html/icons/**', '!src/html/images/**', '!src/html/styles/**' ])
  .pipe(gulp.dest('build'));
});

gulp.task('markup', function() {
  return gulp.src( 'src/html/**' )
  .pipe(gulp.dest('build'));
});