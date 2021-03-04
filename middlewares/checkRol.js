const {response}=require('express');
module.exports =(rol)=>{

    return(req,res=response, next)=>{
        if(rol ===req.user.rol){
            next();
        }else{
            return res.status(403).send({msg:"No tiene permiso para esto"})
        }
    }
}