const { Sequelize } = require("sequelize")

var sequelize = new Sequelize('todo','root','mysql',{
    host: 'localhost',
    dialect: 'mysql',
   pool : {
       max : 5, 
       min :0,
       idle : 10000
   }
})
sequelize
.authenticate()
.then(() => {
  console.log('Connected successfully.');
})
 .catch(err => {
 console.error('Unable to connect to the database:', err);
});
module.exports= sequelize