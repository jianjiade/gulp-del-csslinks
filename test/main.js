var assert = require('stream-assert');
var test = require('test-stream');
var delcsslinks = require('../index');
var should = require('should');
var path = require('path');
var File = require('gulp-util').File;
var gulp = require('gulp');
require('mocha');

describe('delcsslinks', function() {
	describe('delcsslinks()', function(){

		it('should equal ', function (done) {
			gulp.src(['../test.html'])
			.pipe(delcsslinks())
			.pipe(assert.first(function(newFile) {
				var newFilePath = path.resolve(newFile.path);
				var expectedFilePath = path.resolve(path.join('min/test.html'));
			}))
			.pipe(assert.end(done));
		})
	})
})
