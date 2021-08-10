
const indmodel = require("../models/country");

exports.getInds = async (req, res) => { // all data from table
    console.log({ indmodel });
    'abc'.toString('base64');
    const newInd = await indmodel.findAll();
    res.status(200).json(newInd)
}
exports.getInd = async (req, res) => { // 1 data as per id
    const newInd = await indmodel.findOne({ where: { id: req.params.id } })
    res.status(200).json(newInd)
}
exports.postInd = async (req, res) => { //new entry
    const newInd = indmodel.build({ states: req.body.states, capital: req.body.capital })
    const cInd = await newInd.save()
    res.status(200).json(cInd)
}
exports.deleteInd = async (req, res) => { //delete data as per the given id 
    const newInd = await indmodel.destroy({ where: { id: req.params.id } })
    res.status(200).json(newInd)
}
// exports.putInd = async(req,res) =>{
//     const newInd = await  indmodel.update({states : req.body.states},{where : {id : req.params.id}})
//     res.status(200).json(newInd)
// }
exports.putInd = async (req, res) => {
    const newInd = await indmodel.update({ capital: req.body.capital }, { where: { id: req.params.id } });
    console.log({ newInd });
    res.status(200).json(newInd);
}

