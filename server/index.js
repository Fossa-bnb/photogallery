const express = require('express');
const app = express();
const path = require('path');
const retrievePhotos = require('../db/model.js');
const cors = require('cors');

const port = process.env.port || 3000;

app.use(cors());

app.use('/', (req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
});

app.use('/', express.static(path.resolve(__dirname, '../')));

app.get('/:id', (req, res) => {
  retrievePhotos(req.params.id, (err, photos) => {
    if (err) {
      console.log('Error retrieving photos');
    } else {
      res.send(photos);
    }
  });
});

app.listen(port, () => {
  console.log(`...listening to port ${port}`);
});