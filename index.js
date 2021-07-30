const express = require('express')
const sequelize = require('./utils/database')
const app = express()
const port = 3000;
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())
const indexRoute = require('./routes');
app.use('/', indexRoute);
app.listen(port, () => {
  console.log(`Server is runnig on port: ${port}`);
});
sequelize.sync()
