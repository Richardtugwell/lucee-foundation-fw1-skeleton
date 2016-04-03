var gulp            = require('gulp');
var path            = require('path');
var pathToFolder    = 'src/apps';
var $               = require('gulp-load-plugins')();

// Combine JavaScript into one file
// In production, the file is minified
module.exports = function(config) {

    gulp.task('javascript', ['javascript:foundation', 'javascript:applications']);

    gulp.task('javascript:foundation', function () {
        var uglify = $.if(config.isProduction, $.uglify()
            .on('error', function (e) {
                console.log(e);
            }));
        return gulp.src(config.SOURCE.javascript)
            .pipe($.sourcemaps.init())
            .pipe($.concat('app.js'))
            .pipe(uglify)
            .pipe($.if(!config.isProduction, $.sourcemaps.write()))
            .pipe(gulp.dest(config.TARGET.assets + '/js'))
    });

    gulp.task('javascript:applications', $.folders(pathToFolder, function(folder){

        var uglify = $.if(config.isProduction, $.uglify()
            .on('error', function (e) {
                console.log(e);
            }));
        return gulp.src(path.join(pathToFolder, folder, '**/*.js'))
            .pipe($.sourcemaps.init())
            .pipe($.concat(folder + '.app.js'))
            .pipe(uglify)
            .pipe($.if(!config.isProduction, $.sourcemaps.write()))
            .pipe(gulp.dest(config.TARGET.assets + '/apps/js'))

    }));

};
