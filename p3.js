var fs = require('fs')

var text = fs.readFileSync(process.argv[2]).toString().split(/\r\n|\n|\r/)
var len = text.length-1

console.log(len)
