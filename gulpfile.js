var gulp = require('gulp');
var gulpEnv = require('gulp-env');
var env = require('node-env-file');

// node-env-file を使った例
env('.env', { raise: false });
gulp.task('node-env-file', function() {
  console.log(process.env.FOO);
});

// gulp-env を使った例
gulpEnv({ file: '.env.json' });
gulp.task('gulp-env', function() {
  console.log(process.env.BAR);
});
