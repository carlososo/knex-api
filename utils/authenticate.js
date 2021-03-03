const userModel = require('../models/User');
const bcrypt = require('bcrypt');

module.exports =({email,password})=>{
    return new Promise((resolve, rej)=>{
        userModel.find({email})
        .then((result)=>{
            const [user] =result;
            bcrypt.compare(password, user.password,function(err, same){
                same ? resolve({same,user}): rej(new Error(err))
            })
        }).catch((error)=>{
            rej(error)
    })
    })
}