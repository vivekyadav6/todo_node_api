const express = require('express')
const app = express();
const { authcontroler } = require('../controler')
app.post('/register', authcontroler.postAuth)
app.post('/login', authcontroler.postAuth1)
app.get('/profile', authcontroler.getProfile)

module.exports = app