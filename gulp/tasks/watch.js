var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('src/style/**', ['css']);
  gulp.watch(['src/images/**', '!src/images/map/**'], ['images']);
  gulp.watch( ['src/html/*.html','src/html/*.json'], ['markup-watch']);
});