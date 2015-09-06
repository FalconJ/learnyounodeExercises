fs = require('fs');

fs.readdir(process.argv[2], function(err, files){
   if(!err){
	for(var i=0; i<files.length; i++){
	  if(files[i].split('.').pop() === process.argv[3] && files[i].indexOf('.') != -1)
	    console.log(files[i]);
	}  	
   }
   else{
      throw err;
   }
});
