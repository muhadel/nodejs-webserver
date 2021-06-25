'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';
const ENV = process.env.NODE_ENV || 'development';

// App
const app = express();

// Middleware
app.use(cors());

app.get('/', (_, res) => {
  res.send('Hello World');
});
app.get('/health', (_, res) => {
  function format(seconds) {
    function pad(s) {
      return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor((seconds % (60 * 60)) / 60);
    var seconds = Math.floor(seconds % 60);

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }
  let uptime = process.uptime();

  res.status(200).json({
    uptime: format(uptime),
    message: 'OK',
    timestamp: new Date().toISOString(),
    config: { env: ENV, host: HOST, port: PORT },
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
