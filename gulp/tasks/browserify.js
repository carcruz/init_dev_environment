var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function() {
  var bundler = browserify({
    cache: {}, packageCache: {}, fullPaths: true,
    entries: ['./src/javascript/app.js'],
    extensions: ['.eco',".jsx"],
    insertGlobals : true,
    debug: true
  });

  var bundle = function() {
    bundleLogger.start();

    return bundler
      .bundle()
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(gulp.dest('./build/'))
      .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler = watchify(bundler);

    bundler.on('update', function(){
      gulp.src(['build/*'])
    .pipe(gulp.dest('build'));
      console.log("changed");
    });

    bundler.on('update', bundle);
  }

  return bundle();
});
