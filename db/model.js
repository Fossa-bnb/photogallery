const db = require('./index.js');
const mongoose = require('mongoose');
const Room = require('./roomSchema');

//create a function that fetches information from the database and invokes a callback on it
const retrievePhotos = (id, callback) => {
  Room.findOne({'roomId': id}, (err, room) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, room);
    }
  });
}

module.exports = retrievePhotos;