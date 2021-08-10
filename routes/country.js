const express = require("express")
const app = express()
const { indcontroler } = require('../controler')

app.get('/', indcontroler.getInds)
app.get('/:id', indcontroler.getInd)
app.post('/', indcontroler.postInd)
app.delete('/:id', indcontroler.deleteInd)
//app.put('/:id/state',indcontroler.putInd)
app.put('/:id', indcontroler.putInd)
module.exports = app
