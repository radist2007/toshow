var myconfig = require('./myconfig');

const gulp = require('gulp');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const del = require('del');
const browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function () {
	// browserSync.reload;
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:7000",
        files: ["public/**/*.*"],
        // files: ["*"],
        browser: "chrome",
        port: 5000,
        // port: myconfig.port,
	});
});
gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});



// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// gulp.task('styles', function(callback){

//     return gulp.src('public/css/style.css')
//         .pipe(debug({title: 'src'}))
//         .pipe(concat('all.css'))
//         .pipe(debug({title: 'all'}))
//         .pipe(gulp.dest('test'));
// });

// gulp.task('clean', function() {
//     return del('test');
// });

// gulp.task('default', console.log('work'));

// gulp.task('watch', function() {

//     gulp.watch('public/**/*.*', function(){
//         console.log("test");
//     });
// })

// gulp.task('server', function() {
//     browseSync.init({
//         server: 'public'
//     })
//     browseSync.watch('public/**/*.*').on('change', browseSync.reload)
// })

// gulp.task('dev', ['server', 'watch']);