/**
 * 
 * @authors vvwhehe (vvxhehe@gmail.com)
 * @date    2016-03-30 13:40:14
 * @version $Id$
 */

var gulp = require('gulp');
var delcsslinks = require('./index');

gulp.task('startdel', function() {
		gulp.src(['*.html'])
			.pipe(delcsslinks())
			.pipe(gulp.dest('min/'))
	})