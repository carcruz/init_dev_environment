var changed    = require('gulp-changed');
var gulp       = require('gulp');

gulp.task('images', function() {
  var dest = './build/images';

  return gulp.src('./src/images/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));
});
