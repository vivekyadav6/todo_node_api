const {Sequelize} = require('sequelize')
const  sequelize = require('../utils/database')
const auth = sequelize.define('users',{
     id : {
         type : Sequelize.INTEGER,
         autoIncrement : true,
         allowNull : false,
         primaryKey : true
     },
     email : {
         type : Sequelize.STRING,
         allowNull: false
     },
     mob: {
         type : Sequelize.STRING,
         allowNull : false
     },
     password : {
         type : Sequelize.STRING,
         allowNull : false,
        
     },
    token : {
        type : Sequelize.STRING,
        allowNull : false,
    }
 })
 module.exports = auth
