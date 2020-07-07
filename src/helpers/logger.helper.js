const fs = require('fs');

const dir = './logs';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const opts = {
  errorEventName: 'error',
  logDirectory: './logs',
  fileNamePattern: 'roll-<DATE>.log',
  dateFormat: 'YYYY.MM.DD',
};
const log = require('simple-node-logger').createRollingFileLogger(opts);

module.exports = log;
