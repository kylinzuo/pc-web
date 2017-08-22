const path = require("path");
const gulp = require("gulp");
const gulpLess = require("gulp-less");
const sass = require('gulp-sass')
const util = require("util");
var browserSync = require('browser-sync');

const CSS_PATH = path.join(__dirname, "static/css");
const JS_PATH = path.join(__dirname, "static/js");

gulp.task("sass", () => {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest(CSS_PATH))
});

gulp.task("less", () => {
  util.log('====================');
  util.log('less start');
  return gulp
    .src("src/less/**/*.less")
    .pipe(gulpLess())
    .pipe(gulp.dest(CSS_PATH));
});

gulp.task("jsMove", () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(gulp.dest(JS_PATH))
});

gulp.task('browserSync', function(){
  browserSync({
    server:{
      baseDir: './'
    }
  })
});

// Gulp watch syntax
gulp.task('watch', ['browserSync'], function () {
  gulp.watch(["src/**/*.js", "src/**/*.less", "src/**/*.scss"], ["jsMove", "less", "sass"]);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('./static/css/*.css', browserSync.reload);
  gulp.watch('./static/js/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);

// build
gulp.task('build', ["sass", "less", "jsMove"]);