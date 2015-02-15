
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    nodemon = require('gulp-nodemon');

var path = require('path');


var env= process.env.NODE_ENV = process.env.NODE_ENV || 'development';//'development';
var config = require('./server/config/config')[env];


var generalOutput = path.join(config.rootPath, '/public/dist');
var pathLess = {
    scripts: config.rootPath+'/public/content/**/*.less',
    main:  config.rootPath+'/public/content/less/main.less',
    dest: generalOutput
}
var pathJs = {
    directives: path.join(config.rootPath, '/public/app/directives/**/*.js'),
    services: [path.join(config.rootPath,'/public/app/services/*.js'), path.join(config.rootPath, '/public/app/resources/*.js')],
    controllers: path.join(config.rootPath, '/public/app/features/**/*.js'),
    app: path.join(config.rootPath, '/public/app/*.js'),
    //vendor:  path.join(config.rootPath, '/public/vendor/**/*.js'),
    dest: generalOutput
}


//CLEAN DIRECTORY
gulp.task('clean', function() {
    return gulp.src(generalOutput)
        .pipe(clean());
});



//LESS FILES
gulp.task('styles', function () {
    return  gulp.src(pathLess.main)
        .pipe(less({
            paths: [pathLess.dest]
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(pathLess.dest));
    //.pipe(notify("Task STYLES DONE!"));
});

//JAVASCRIPT FILES
gulp.task('app',function() {
    gulp.src(pathJs.app)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify({mangle: false}))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(pathJs.dest));
//        .pipe(notify("Task SCRIPTS DONE!"));
});

gulp.task('services',function() {
    gulp.src(pathJs.services)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify({mangle: false}))
        .pipe(concat('services.min.js'))
        .pipe(gulp.dest(pathJs.dest));
//        .pipe(notify("Task SCRIPTS DONE!"));
});

gulp.task('directives',function() {
    gulp.src(pathJs.directives)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify({mangle: false}))
        .pipe(concat('directives.min.js'))
        .pipe(gulp.dest(pathJs.dest));
//        .pipe(notify("Task SCRIPTS DONE!"));
});

gulp.task('controllers',function() {
    gulp.src(pathJs.controllers)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify({mangle: false}))
        .pipe(concat('controllers.min.js'))
        .pipe(gulp.dest(pathJs.dest));
//        .pipe(notify("Task SCRIPTS DONE!"));
});

//TODO: PENDING FOR VENDOR
//gulp.task('vendor',function() {
//    gulp.src(pathJs.vendor)
//        .pipe(jshint())
//        .pipe(jshint.reporter('default'))
//        .pipe(uglify())
//        .pipe(concat('vendor.min.js'))
//        .pipe(gulp.dest(pathJs.dest))
//        .pipe(notify("Task SCRIPTS DONE!"));
//});


// A development task to run anytime a file changes
gulp.task('watch', function() {
    gulp.watch(pathLess.scripts, ['styles']);
    gulp.watch(pathJs.app, ['app']);
    //gulp.watch(pathJs.services, ['services']);
    gulp.watch(pathJs.directives, ['directives']);
    gulp.watch(pathJs.controllers, ['controllers']);
});


//TEST GULP ITS WORKING
gulp.task('default', function() {
    console.log('Hello world.');
});

//LAUNCH ALL MINIFY TASKS
gulp.task('minify', ['styles', 'app', 'services','directives', 'controllers']);

//START NODEMOON TO START WATCHERS
//gulp.task('nodemon', function () {
//    nodemon({ script: 'server.js'})
//        .on('start', ['watch'], function () {
//            console.log('start!');
//        })
//        .on('change', ['watch'], function () {
//            console.log('change!');
//        })
////        .on('restart', function () {
////            console.log('restarted!');
////        });
//})