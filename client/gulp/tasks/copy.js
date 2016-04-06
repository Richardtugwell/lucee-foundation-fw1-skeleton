var gulp = require('gulp');
var $       = require('gulp-load-plugins')();

// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
module.exports = function(config) {

    gulp.task('copy', ['copy:foundation'] );

    gulp.task('copy:assets', function () {
        return gulp.src(config.SOURCE.assets)
            .pipe(gulp.dest(config.TARGET.assets));
    });

    // Compiles the Foundation for Apps directive partials into a single JavaScript file
    gulp.task('copy:foundation', function(cb) {

      // Iconic SVG icons
      gulp.src(config.SOURCE.iconic)
        .pipe(gulp.dest(config.TARGET.assets + '/img/iconic'))
      ;

      cb();
    });


};
