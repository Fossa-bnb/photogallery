const express = require('express');
const app = express();
const path = require('path');

app.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/:id', (req, res) => {
  console.log('ahoy' + req.params.id);
  res.send('received get request from component');
  // 
});

app.listen(3000, () => {
  console.log('...listening to port 3000');
});