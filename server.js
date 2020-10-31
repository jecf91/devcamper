const express = require('express');
const dotenv = require('dotenv');
//route files
const bootcamps = require('./routes/bootcamps');

//middlewares
const morgan = require('morgan');

//load env vars
dotenv.config({ path: './config/config.env' });

//initialize app with express
const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

/**
 * Route Structure
 * GET/POST/PUT/DELETE
 *
 * api/v1/bootcamps
 * api/v1/courses
 * api/v1/reviews
 * api/v1/auth (auth is not CRUD)
 * api/v1/users
 */
//mount routers
app.use('/api/v1/bootcamps', bootcamps);

//getting env variables
const PORT = process.env.PORT || 5000;

//running express server
app.listen(PORT, () =>
  console.log(`Running on ${process.env.PORT} in ${process.env.NODE_ENV}`)
);
