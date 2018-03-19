"use strict";

var gulp=require('gulp');
var connect=require('gulp-connect');

gulp.task('connect',function () {
    connect.server({
        root:['src'],
        port:8008,
        base:'http:localhost',
        livereload:true
    });
});

gulp.task('default',["connect"]);