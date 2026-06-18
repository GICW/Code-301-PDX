'use strict';

// 🔗 3rd Party Middleware
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// 🧠 Internal Middleware
const errorHandler = require('./middleware/500.js');
const notFound = require('./middleware/404.js');

// 🔐 Routes
const authRouter = require('./auth/router.js');

// 🚀 Initialize Express App
const app = express();

// 🌐 Global Middleware Setup
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🛣️ Routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the API 🏁');
});

app.use('/api', authRouter);

// 🧱 Error Middleware
app.use(notFound);
app.use(errorHandler);

// 🔊 Export Server
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`✅ Server running on http://localhost:${port}`);
    });
  },
};