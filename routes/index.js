const express = require('express')
const app = express();
const todoroute = require('./todo');
const indroute = require('./country');
const authroute = require('./auth')
app.use('/todo', todoroute);
app.use('/india', indroute);
app.use('/auth', authroute)
module.exports = app;