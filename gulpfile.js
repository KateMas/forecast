var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');

//sass
gulp.task('styles', function(){
    gulp.src(['./node_modules/normalize.css/normalize.css', './app/sass/style.sass'])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat('style.css'))
        .pipe(prefix('last 12 version'))
        .pipe(gulp.dest('./public'))
});

//script
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

gulp.task('scripts', function(){
    gulp.src(['./node_modules/jquery/dist/jquery.js', './app/js/*.js'])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public'))
});

//watch
gulp.task('watch', function () {
    gulp.watch('./dev/sass/style.sass', ['styles']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);