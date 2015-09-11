module.exports = function(dir, filter, cb){
	var fs = require('fs');
	var path = require('path');
  var data = [];

	fs.readdir(dir, function(err, files){
		if(err){
			return cb(err);
		}
		else{
			files.forEach(function(file){
					if(path.extname(file) === '.' + filter)
						data.push(file);
			});
		}
		return cb(null, data);
	});
}