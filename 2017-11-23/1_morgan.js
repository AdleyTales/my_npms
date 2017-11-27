
const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('hello, world!')
});

app.listen(3000,()=>{
  console.log('running 3000...');
})
