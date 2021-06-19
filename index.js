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
  res.status(200).json({
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    config: { env: ENV, host: HOST, port: PORT },
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
