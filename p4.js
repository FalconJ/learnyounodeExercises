var fs = require('fs')

var len = undefined

function newLines(callback){
 fs.readFile(process.argv[2], function fileRead(err, fileContents){
   len = fileContents.toString().split(/\r\n|\r|\n/).length - 1
   callback()
 })
}

function logLines(){
 console.log(len)
}

newLines(logLines)

