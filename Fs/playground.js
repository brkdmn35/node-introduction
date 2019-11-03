const fs = require('fs')

const read =fs.readFileSync('./lib.js', {encoding: 'utf-8'}).toString()

console.log(read)

//fs.writeFile('./lib.js', 'var me = "hello"') it writes on the file all over, delete everything
