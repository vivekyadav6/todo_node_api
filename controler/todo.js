const todomodel = require('../models/todo');

exports.getTodos = async (req, res) => {
    const newTodo = await todomodel.findAll();
    res.status(200).json(newTodo)

}
exports.getTodo = async(req,res) =>{
    const newTodo = await todomodel.findOne({ where : { id : req.params.id}})
    res.status(200).json(newTodo)
}

exports.postTodo =async (req, res) => {
     const newTodo = todomodel.build({title:req.body.title, description :req.body.description});
    const cTodo = await newTodo.save();
    res.status(200).send(cTodo)
}
exports.deleteTodo = async (req,res) =>{
    const newTodo = await todomodel.destroy({where :{id : req.params.id}})
    res.status(200).json(newTodo)
    
}
exports.putTodo = async (req,res) =>{
    const newTodo = await todomodel.update({title : req.body.title},{where : {id : req.params.id}})
    res.status(200).json(newTodo)
    console.log(newTodo)
}
exports.putDes = async (req,res) =>{
    const newTodo = await todomodel.update({description : req.body.description},{where : {id : req.params.id}})
    res.status(200).json(newTodo)
}