const mongoose = require('mongoose');

const mongohost = 'database' || 'localhost';

mongoose.connect(`mongodb://${mongohost}/photos`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('database connection open');
});

module.exports.db = db;
