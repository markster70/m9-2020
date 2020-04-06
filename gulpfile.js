"use strict";

// Load plugins
const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const del = require("del");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cleancss = require('gulp-clean-css');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const touch = require('gulp-touch-fd');


// BrowserSync
function browserSync(done) {
    browsersync.init({
        injectChanges: true,
        proxy: "http://m9-digital-2020:8080",
        port: 3001

    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}


// clean up static asset folders before re-build
function clean() {
    return del(['dist/*.css', 'dist/js/*.js', 'dist/images/**']);
}

function copyFonts () {

    return gulp.src('dev/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
}

function createCss () {
    return gulp.src('dev/scss/m9-2020-styles.scss')
        .pipe(plumber({ errorHandler: function(err) {
                notify.onError({
                    title: "Gulp  CSS error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}))
        .pipe(sass())
        .pipe(browsersync.stream())
        .pipe(gulp.dest('dist/css'))
        .pipe(touch())
        .pipe(rename({suffix: '.min'}))
        .pipe(cleancss({level: {1: {specialComments: 0}}}))
        .pipe(gulp.dest('dist/css'))
        .pipe(touch())
        .pipe(notify({ message: 'createCSS complete' }))

}



function createImages() {
    // compress amy image assets so that we are nive and tidy for a prod release
    return gulp.src('dev/images/**/*.{gif,jpg,png,svg}')
        .pipe(newer('dist/images'))
        .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Image Compression complete' }));
}

function lintScripts () {
    return gulp.src(['dev/js/custom-scripts/*.js','dev/js/plugins/*.js'])
        .pipe(plumber({ errorHandler: function(err) {
                notify.onError({
                    title: "Gulp  Lint error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}))
        .pipe(jshint({esnext: true}))
        .pipe(jshint.reporter('default'))

}

function createScripts() {

    return gulp.src(['dev/js/vendor/*.js','dev/js/vendor/plugins/*.js','dev/js/helper-functions/*.js','dev/js/plugins/*.js','dev/js/custom-scripts/*.js'])
        .pipe(plumber({ errorHandler: function(err) {
                notify.onError({
                    title: "Gulp  JS Compile error in " + err.plugin,
                    message:  err.toString()
                })(err);
            }}))
        .pipe(babel({
            presets: ['@babel/preset-env', {sourceType: "unambiguous" }]
        }))
        .pipe(concat('m9-2020-concat-script.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(touch())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
        .pipe(touch())
        .pipe(notify({ message: 'createScripts task complete' }))
        .pipe(browsersync.stream());
}


function watchFiles() {
    gulp.watch("dev/scss/**/*", createCss);
    gulp.watch("dev/images/**/*", createImages);
    gulp.watch("dev/js/**/*", gulp.series(lintScripts,createScripts));
    gulp.watch("dev/fonts/**/*", copyFonts);

    gulp.watch( "site-partials/*.html",gulp.parallel(browserSyncReload));

}


// Tasks
gulp.task("images", createImages);
gulp.task("css", createCss);
gulp.task("js", gulp.series(lintScripts,createScripts));
gulp.task("clean", clean);


gulp.task(
    "build",
    gulp.series(clean, gulp.parallel(createCss, createImages, "js", copyFonts))
);

gulp.task("run", gulp.parallel("build",browserSync, watchFiles));
