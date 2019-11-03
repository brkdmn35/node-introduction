console.log(module);

const add = (num, num2) => {}
const notPublic = ( ) => {};

module.exports = {add, value: 1}
module.exports.more = {value2: 2}

const nameFn = require('./code2');

nameFn()
