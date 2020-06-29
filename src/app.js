const express = require('express');
const { PORT } = require('./config/config');

const app = express();

app.use('', (req, resp) => {
  resp.send('Hello world!');
});

app.listen(PORT, () => {
  console.log('Server has started on port ', PORT);
});
