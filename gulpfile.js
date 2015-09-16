var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css');

gulp.task('default', function () {
  gulp.src('css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(minifyCss())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'));
});