
const express = require('express');
const app = express();

app.get('/index',(req,res) => {
  console.log(req.url);
  // res.send('hello nodejs ,hello nodemon');
  let a = 100;
  res.send('安装nodemon到全局',a);
});

app.listen(4000,() => {
  console.log('server running at 4000 ...');
});


// 用 nodemon 代替 node 启动js

// 安装到全局 -g
