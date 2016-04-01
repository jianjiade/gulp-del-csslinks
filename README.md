## gulp-del-csslinks

### Description

the gulp plugin used to delete csslinks from html node dom.

### Installation

npm install  gulp-del-csslinks --save-dev

### Usage

```
var gulp = require('gulp');
var csslinks = require('gulp-del-csslinks');

gulp.task('startdel', function() {
		gulp.src(['*.html'])
			.pipe(delcsslinks())
			.pipe(gulp.dest('min/'))
	});
```