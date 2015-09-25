'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = [
    'manifest.json',
    'background.js',
    'js/*.js',
    'images/*.png'
];
var xpiName = 'unicornify.xpi';

gulp.task('default', function () {
    gulp.src(files)
        .pipe(zip(xpiName))
        .pipe(gulp.dest('.'));
});