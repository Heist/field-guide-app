
var gulp = require('gulp');
var addsrc = require('gulp-add-src');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var minify = require('gulp-minify-css');
var newer = require('gulp-newer');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('sass', function() {
	return gulp.src('sass/marketing.scss')
		.pipe(newer('sass/*.scss')).on('error', errorHandler)
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('build/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minify())
		.pipe(gulp.dest('build/css'))
		.pipe(notify({ message: "CSS: Your files are now organized" }));
});

gulp.task('scripts', function() {
	return gulp.src(['js/lib/*.js', 'js/scripts.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('build/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
		.pipe(notify({ message: "JS: Your files are now organized" }));
});

var imgDest = 'build/img';
gulp.task('images', function() {
    return gulp.src('img/*')
      .pipe(newer(imgDest)).on('error', errorHandler)
      .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        })).on('error', errorHandler)
      .pipe(gulp.dest(imgDest));
});

gulp.task('fonts', function() {
    return gulp.src('font/*')
      .pipe(gulp.dest('build/font'));
});

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('img/**/*', ['images']);
});

gulp.task('default', function() {
    gulp.start('sass', 'scripts', 'images', 'watch');
});


function errorHandler (error) {
    console.log(error.toString());
    this.emit('end');
}