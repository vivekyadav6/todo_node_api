const authmodel = require('../models/auth')
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken')
exports.postAuth = async (req, res) => {
    const password = req.body.password
    const enpassword = await bcrypt.hash(password, saltRounds)
    const newAuth = authmodel.build({ email: req.body.email, mob: req.body.mob, password: enpassword, });
    const cAuth = await newAuth.save()
    res.status(200).json(cAuth)``

}
// exports.postAuth1 = async(req,res)=>{
//     var email = req.body.email
//     var  password = req.body.password
//     const newAuth = await authmodel.findOne({where : {email : email}});
//     let enpassword = await bcrypt.hash(password,saltRounds)
//      const user = {password: enpassword}
//     const token = jwt.sign({id : user.id},'my_secret_key')
//     res.json({token : token})
//     if (newAuth == null){
//         return res.status(400).send('cannot find user')
//     }
//      else  if(await bcrypt.compare(password,user.password)){
//             res.send(newAuth)
//         }
//         else{res.send('not allowed')}

//     }
exports.postAuth1 = async (req, res) => {
    var email = req.body.email
    var password = req.body.password
    const user = await authmodel.findOne({ where: { email: email } });
    if (await bcrypt.compare(password, user.password)) {
        const newToken = jwt.sign({ id: user.id }, 'ggg');
        const cA = await authmodel.update({ token: newToken }, { where: { email: email } })
        res.json({ msg: 'welcome' })
    } else {
        res.json({ error: 'Invalid email or password' });
    }
}
exports.getProfile = async (req, res) => {
    var con = req.headers
    res.send(con)

}

