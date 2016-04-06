var gulp            = require('gulp');
var path            = require('path');
var pathToFolder    = 'src/apps';
var $               = require('gulp-load-plugins')();
var ngHtml2Js = require("gulp-ng-html2js");// Compile Sass into CSS
// In production, the CSS is compressed
module.exports = function(config) {

    gulp.task('templates', ['templates:applications']);

    gulp.task('templates:applications', function(cb) {
        gulp.src(config.SOURCE.apptemplates)
    .pipe(ngHtml2Js({
        moduleName: function (file) {
            var pathParts = file.path.split('/');
            var folder = pathParts[pathParts.length - 2];
            return folder.replace(/-[a-z]/g, function (match) {
                return match.substr(1).toUpperCase();
            });
        }
    }))

        .pipe($.uglify())
        .pipe($.concat('app.templates.js'))
        .pipe(gulp.dest(config.TARGET.assets + '/js'))
      ;


      cb();
    });
};
