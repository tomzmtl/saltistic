'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var src = {
  scss: './resources/scss/**/*.scss',
}

gulp.task('sass', function() {
  return gulp.src(src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  gulp.watch(src.scss, { usePolling: true }, ['sass']);
});
