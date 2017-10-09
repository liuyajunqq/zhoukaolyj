var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
gulp.task('webserver', function(){
    gulp.src('./')
        .pipe(webserver({
            port: 8090,
            host: 'localhost',
            livereload: true,
            directoryListing: {
                path: './',
                enable: true
            },
            open: true
        }));
    gulp.src('./css/*.css')
        .pipe(concat('all.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./file'));
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./file'))
});