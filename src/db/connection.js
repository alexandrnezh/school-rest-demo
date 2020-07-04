const mongoose = require('mongoose');

const { DB_CONN } = require('../config/config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DB_CONN, options);

const db = mongoose.connection;

db.on('error', () => {
  console.log('> error occurred from the database');
});
db.once('open', () => {
  console.log('> successfully opened the database');
});

module.exports = mongoose;
