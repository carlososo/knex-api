const {response}=require('express');
const JWT = require('jsonwebtoken');
const userModel = require('../models/User');

module.exports = async (req, res= response, next)=>{
    const Authorization = req.get('Authorization');
    if(Authorization){
        const token = Authorization.replace('JWT ','')
        const payload = JWT.verify(token,process.env.SECRET_JWT_SEED)
        console.log(payload);
        try{
            if(payload){
                const {user_id} =payload
                const [user] = await userModel.find({user_id})
                .catch(()=> req.status(400).send({
                    "message": "no podemos hacer esto"
                }));
                if(!user) req.status(401).send()({'message':"Usuario no encontrado"})
                req.user =user;
                next();
            }else{
               return res.status(401).send({msg: "token invalido"})
            }
        }catch(err){
            return res.status(401).send({msg: "token malformado"})
        }
    }else{
        res.status(401).send({msg: "Header no fue enviado"})
    }

}