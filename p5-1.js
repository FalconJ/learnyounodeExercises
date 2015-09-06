fs = require('fs');

fs.readdir(process.argv[2], function(err, files){
   if(!err){
       files.forEach(function(list){
	  if(list.split('.').pop() === process.argv[3] && list.indexOf('.') != -1)
	    console.log(list);
	});  	
   }
   else{
      throw err;
   }
});
