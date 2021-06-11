'use strict';

const express = require('express');
require('dotenv').config();

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';

// App
const app = express();

// Middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
