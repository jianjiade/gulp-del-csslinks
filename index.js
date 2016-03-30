
//PLUGIN_NAME: delcsslinks

'use strict';

var through = require('through-gulp');
var guitl = require('gulp-util');
var path = require('path');

const PLUGIN_NAME = 'gulp-del-csslinks';
function delcsslinks(){
	var stream = through(function(file, encoding, callback){
		if(file.isNull()){
			return callback(null, file);
		}

		if (file.isStream()) {
			this.emit('error', new guitl.PluginError(PLUGIN_NAME, PLUGIN_NAME + ' Streaming nor supported'));
			return callback(null, file);
		}

		try {
			var pathArr = file.path.split(path.sep);
			var filename = pathArr[pathArr.length - 1];

			var contents = file.contents.toString().replace(/<link(.*)>/g, "");
			file.contents = new Buffer(contents);
		} catch(err) {
			this.emit('error', new guitl.PluginError('delcsslinks', err, {
				fileName: file.path,
				showProperties: false
			}));
		}
		this.push(file);
		callback(null, file);
	});
	return stream;
}

module.exports = delcsslinks;