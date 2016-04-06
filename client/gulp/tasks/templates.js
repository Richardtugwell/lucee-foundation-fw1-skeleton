var gulp            = require('gulp');
var path            = require('path');
var pathToFolder    = 'src/apps';
var $               = require('gulp-load-plugins')();
// Compile Sass into CSS
// In production, the CSS is compressed
module.exports = function(config) {

    gulp.task('templates', ['templates:applications']);

    gulp.task('templates:applications', $.folders(pathToFolder, function(folder){

        return gulp.src(path.join(pathToFolder, folder, '**/*.html'))

        .pipe($.ngHtml2js({
          prefix: 'module/',
          moduleName: 'foundation',
          declareModule: false
        }))
        .pipe($.uglify())
        .pipe($.concat('app.' + folder + '.templates.js'))
        .pipe(gulp.dest(config.TARGET.assets + '/apps/js'))


    }));
};
