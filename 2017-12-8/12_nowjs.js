const Now = require('now.js');

const now = new Now();

// 现在的时间
var now_time = now.format('YYYY-MM-DD HH:mm:ss');
var now_time2 = now.format('YYYY/MM/DD HH:mm:ss');
var now_time3 = now.format('YYYY年MM月DD日 HH:mm:ss');
console.log(now_time);
console.log(now_time2);
console.log(now_time3);

// console.log(now);
console.log('当前的时间戳:'+now.value);
