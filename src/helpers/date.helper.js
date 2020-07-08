const moment = require('moment');

exports.parseStringToDate = (dateStr) => moment(dateStr);

exports.parseDateToString = (date) => moment(date).format('DD/MM/YY');
