'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Appdynamics APM
require('appdynamics').profile({
  controllerHostName: process.env.APPDYNAMICS_CONTROLLER_HOST,
  controllerPort: process.env.APPDYNAMICS_CONTROLLER_PORT,
  controllerSslEnabled: process.env.APPDYNAMICS_CONTROLLER_SSL_ENABLED,
  accountName: process.env.APPDYNAMICS_ACCOUNT_NAME,
  accountAccessKey: process.env.APPDYNAMICS_ACCOUNT_ACCESS_KEY,
  applicationName: process.env.APPDYNAMICS_APP_NAME,
  tierName: process.env.APPDYNAMICS_TIER_NAME,
  nodeName: process.env.APPDYNAMICS_NODE_NAME,
});
// Constants
const PORT = process.env.NODE_PORT || 8080;
const HOST = process.env.NODE_HOST || '127.0.0.1';
const ENV = process.env.NODE_ENV || 'development';
const STATIC_PATH = __dirname + '/views/';
// App
const app = express();

// Middleware
app.use(cors());
app.use(express.static(STATIC_PATH));
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
app.get('/sharks', function (req, res) {
  res.sendFile(STATIC_PATH + 'sharks.html');
});
app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
