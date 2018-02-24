const express = require('express');
const app = express();
const path = require('path');
const retrievePhotos = require('../db/model.js');

app.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/:id', (req, res) => {
  retrievePhotos(req.params.id, (err, result) => {
    if (err) {
      console.log('there was an error');
    } else {
      console.log('speaking to db');
      console.log('got back' + result); 
    }
  });
  // use the req.params.id to query the database for the info
  // create a model function that finds the info from the database


  res.send('received get request from component');
});

app.listen(3000, () => {
  console.log('...listening to port 3000');
});