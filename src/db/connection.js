const mongoose = require('mongoose');

const { DB_CONN } = require('../config/config');
const logger = require('../helpers/logger.helper');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DB_CONN, options);

const db = mongoose.connection;

db.on('error', () => {
  logger.log('info', 'Error occurred from the database');
});
db.once('open', () => {
  logger.log('info', 'Successfully opened the database');
});

module.exports = mongoose;
