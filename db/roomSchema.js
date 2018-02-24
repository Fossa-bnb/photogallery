const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomId: Number,
  photos: [{ photoId: Number, url: String, caption: String }],
});


const Room = mongoose.model('Room', roomSchema);

module.exports = Room;