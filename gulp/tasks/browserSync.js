var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      baseDir: ['build', 'src'],
    },
    notify: false,
    files: [
      "build/**",
      "!build/images/map/**",
      '!http://localhost:3000/*'
    ]
  });
});
