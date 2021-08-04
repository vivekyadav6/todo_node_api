const express =  require('express')
const app = express();
const todoroute = require('./todo');
const indroute = require('./country');
app.use('/todo', todoroute);
app.use('/india',indroute);
module.exports = app;