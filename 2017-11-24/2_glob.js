
const glob = require('glob');

glob('js/*.js',(err,files) => {
  console.log(files); //[ 'js/a.js', 'js/b.js', 'js/c.js' ]
});

// 可以写条件
glob('js/a*.js',(err,files) => {
  console.log(files); //[ 'js/a.js', 'js/a1.js', 'js/a2.js' ]
});
