const User = require ('../models/User');
const createUser =(req,res)=>{
    User.create(req.body).then(row=>{
        res.status(201).send(row)
        
    }).catch(err =>res.status(400).send(err))
};

const findAll =(req,res)=>{
    User.findAll().then(rows =>{
        res.status(200).send(rows);
    }).catch(err=>{
        res.status(400).send(err);
    })
}

const findOne =(req, res)=>{
    
    User.findOne(req.params.idUser).then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(400).send(err)
    })
}
const updateOneUser =(req, res)=>{

    User.update(req.params.idUser, req.body).then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(400).send(err)
    });
};
const destroyOneUser =(req,res)=>{
    User.destroy(req.params.idUser).then(()=>{
        res.status(204).send()
    }).catch(() =>{
        res.status(400).send()
    })
}
const dilitOneUser =(req,res)=>{
    User.dilit(req.params.idUser).then(()=>{
        res.status(204).send()
    }).catch(() =>{
        res.status(400).send()
    })
}

module.exports={
    createUser,
    findOne,
    findAll,
    updateOneUser,
    destroyOneUser,
    dilitOneUser
}