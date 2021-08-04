const {Sequelize} = require("sequelize")
const sequelize = require('../utils/database')
const country = sequelize.define('india', {
    id :{
        type:  Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true

    },
    states :{
        type : Sequelize.STRING,
        allowNull : false
    },
    capital : {
        type : Sequelize.STRING,
        allowNull : false
    }
})  
module.exports = country