const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('database connection open');
});

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  id: Number,
  photos: [{ id: Number, url: String, caption: String }],
});

const Room = mongoose.model('Room', roomSchema);
