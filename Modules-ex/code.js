console.log(module);

const add = (num, num2) => {}
const notPublic = ( ) => {};

module.exports = {add, value: 1}
module.exports.more = {value2: 2}

const {action,value,userIds} = require('./code2');

console.log(value);   // coming from module
console.log(private); // undefined
