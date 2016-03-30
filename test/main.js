var assert = require('stream-assert');
var test = require('test-stream');
var delcsslinks = require('../index');
var should = require('should');
var path = require('path');
var File = require('gulp-util').File;
var gulp = require('gulp');
require('mocha');

// describe('Array', function() {
// 	describe('#indexOf()', function () {
// 		it('should return -1 when the value is not present', function () {
// 			assert.equal(-1, [1,2,3].indexOf(5));
// 			assert.equal(-1, [1,2,3].indexOf(0));
// 		})
// 	})
// });

describe('delcsslinks', function() {
	describe('delcsslinks()', function(){

		it('should equal ', function (done) {
			gulp.src(['../test.html'])
			.pipe(delcsslinks())
			.pipe(assert.length(1))
			.pipe(assert.first(function(newFile) {
				var newFilePath = path.resolve(newFile.path);
				var expectedFilePath = path.resolve(path.join(thirdBase, 'test.html'));
			}))
			.pipe(assert.end(done));
		})

	})
})


