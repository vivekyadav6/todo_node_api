const { Sequelize } = require('sequelize')
const sequelize = require('../utils/database')
const todo =    sequelize.define( 'todos',{
    id :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey: true
    },
    title :{type : Sequelize.STRING,allowNull:false},
    description : { type : Sequelize.STRING,allowNull : false}
})
module.exports= todo
