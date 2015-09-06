fs = require('fs');

fs.readdir(process.argv[2], function(err, files){
   if(!err){
      console.log(files);
   }
   else{
      throw err;
   }
});

