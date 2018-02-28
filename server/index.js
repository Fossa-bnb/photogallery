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
  retrievePhotos(req.params.id, (err, photos) => {
    if (err) {
      console.log('there was an error');
    } else {
      console.log('speaking to db');
      console.log('got back' + photos); 
      res.send(photos);
    }
  });
});

app.listen(3000, () => {
  console.log('...listening to port 3000');
});