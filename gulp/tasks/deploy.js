'use strict';
var runSequence = require('run-sequence')
// Necessary Plugins
var gulp   = require('gulp');
module.exports = gulp.task('deploy', function(){
  runSequence('js', 'jade', 'stylus', 'imagemin', 'deploy-pages');
});
