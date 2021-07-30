const { Sequelize } = require('sequelize')
const sequelize = require('../utils/database')
const todo =    sequelize.define( 'todo',{
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
