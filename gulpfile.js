var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat		= require('gulp-concat'),
	uglify		= require('gulp-uglifyjs'),
	cssnano		= require('gulp-cssnano'),
	rename		= require('gulp-rename');

gulp.task('sass', function(){
	return gulp.src(['sass/**/*.sass','scss/**/*.scss'])
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task('scripts', function(){
	return gulp.src([
		'js/jquery-3.0.0.min.js',
		
		
		
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js'))
})

gulp.task('css-libs',['sass'], function(){
	return gulp.src('css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('css'))
})

gulp.task('watch',['browser-sync','css-libs','scripts'], function(){
	gulp.watch(['sass/**/*.sass', 'scss/**/*.scss'],['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
})


gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: '.'
		},
	})
})

gulp.task('default', ['watch']);