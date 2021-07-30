const express =  require('express')
const app = express();
const todoroute = require('./todo');
app.use('/todo', todoroute);
module.exports = app;