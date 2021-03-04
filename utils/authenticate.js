const userModel = require('../models/User');
const bcrypt = require('bcrypt');

module.exports =({email,password})=>{
    return new Promise((resolve, rej)=>{
        userModel.find({email})
        .then((result)=>{
            const [user] =result;
            bcrypt.compare(password, user.password,function(err, same){
               if(same){
                resolve({same, user})
               }else{
                reject(new Error('El Password es incorrecto'))
               }
            })
        }).catch((error)=>{
            rej(error)
    })
    })
}