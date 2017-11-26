const debug = require('debug')('http');
const http = require('http');

const name = 'My App';

debug('Beginning %o',name)

http.createServer((req,res) => {

  debug(req.method + ' ' + req.url);

  require('./worker');

  res.end('hello nodejs');
}).listen(3000,()=>{
  console.log('server is running at 3000...');
});
