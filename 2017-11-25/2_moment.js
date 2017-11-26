
// console.log(Date.now()); //时间戳

const moment = require('moment');

const now = moment();

console.log(now.format('YYYY-MM-DD')); //2017-11-26
console.log(now.format('YYYY-MM-DD hh:mm:ss')); //2017-11-26 10:55:45

let timestamp = Date.now();
console.log(moment(timestamp).format('YYYY-MM-DD hh:mm:ss'));
