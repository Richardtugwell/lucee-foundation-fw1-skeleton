var gulp            = require('gulp');
var path            = require('path');
var pathToFolder    = 'src/apps';
var $               = require('gulp-load-plugins')();
// Compile Sass into CSS
// In production, the CSS is compressed
module.exports = function(config) {

    gulp.task('sass', ['sass:foundation', 'sass:applications']);

    gulp.task('sass:foundation', function () {
        var uncss = $.if(config.isProduction, $.uncss({
            html: ['src/**/*.html'],
            ignore: [
                new RegExp('.foundation-mq'),
                new RegExp('^\.is-.*')
            ]
        }));

        var minifycss = $.if(config.isProduction, $.cleanCss());

        return gulp.src(config.SOURCE.scssApp)
            .pipe($.sourcemaps.init())
            .pipe($.sass({
                    includePaths: config.SOURCE.sass
                })
                .on('error', $.sass.logError))
            .pipe($.autoprefixer({
                browsers: config.COMPATIBILITY
            }))
            .pipe(minifycss)
            .pipe($.if(!config.isProduction, $.sourcemaps.write()))
            .pipe(gulp.dest(config.TARGET.assets + '/css'))
    });

    gulp.task('sass:applications', $.folders(pathToFolder, function(folder){

        var minifycss = $.if(config.isProduction, $.cleanCss());

        return gulp.src(path.join(pathToFolder, folder, '**/*.scss'))
            .pipe($.sourcemaps.init())
            .pipe($.sass()
                .on('error', $.sass.logError))
            .pipe($.autoprefixer({
                browsers: config.COMPATIBILITY
            }))
            .pipe($.concat('app.' + folder + '.css'))
            .pipe(minifycss)
            .pipe($.if(!config.isProduction, $.sourcemaps.write()))
            .pipe(gulp.dest(config.TARGET.assets + '/apps/css'))

    }));
};
