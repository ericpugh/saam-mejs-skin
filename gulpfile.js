var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Move mediaelement.js files to vendor.
  gulp.src([
      './node_modules/mediaelement/build/*'
    ])
    .pipe(gulp.dest('./vendor/mediaelement/build'));

  gulp.src([
      './node_modules/mediaelement/demo/*.vtt'
    ])
    .pipe(gulp.dest('./vendor/mediaelement/demo'));

  // Move mediaelement.js images to custom skin
    gulp.src([
        './node_modules/mediaelement/build/mejs-controls.png',
        './node_modules/mediaelement/build/mejs-controls.svg'
    ])
    .pipe(gulp.dest('./css/skin'));

});

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css/skin'));
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
      './css/*.css',
      '!./css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Minify JavaScript
gulp.task('js:minify', function() {
  return gulp.src([
      './js/*.js',
      '!./js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'));
});

// JS
gulp.task('js', ['js:minify']);

// Default task
gulp.task('default', ['css', 'js', 'vendor']);

// Dev task
gulp.task('dev', ['css', 'js'], function() {
  gulp.watch('./scss/*.scss', ['css']);
  gulp.watch('./js/*.js', ['js']);
});
