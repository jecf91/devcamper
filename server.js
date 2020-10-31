const express = require('express');
const dotenv = require('dotenv');

//load env vars
dotenv.config({ path: './config/config.env' });

//initialize app with express
const app = express();

//getting env variables
const PORT = process.env.PORT || 5000;

//running express server
app.listen(PORT, () =>
  console.log(`Running on ${process.env.PORT} in ${process.env.NODE_ENV}`)
);
