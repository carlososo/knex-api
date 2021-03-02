const Home = require('../models/Home')
const createHome = (req, res)=>{
    Home.create(req.body).then((row)=>{
        res.status(201).send(row).catch((err)=>res.status(400).send(err))
    })
        // res.send({message: "Message Fake"})
};
const findAll =(req,res)=>{
    Home.findAll().then(rows=>{
        res.status(200).send(rows)
    }).catch(err=>{
        res.status(400).send(err)
    })
}
const findOne =(req, res)=>{
    Home.findOne(req.params.idHome).then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(400).send(err)
    });
};

const updateOneHome =(req, res)=>{

    Home.update(req.params.idHome, req.body).then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(400).send(err)
    });
};
const destroyOneHome =(req,res)=>{
    Home.destroy(req.params.idHome).then(result=>{
        res.status(204).send()
    }).catch(err =>{
        res.status(400).send()
    })
}
const dilitOneHome =(req,res)=>{
    Home.dilit(req.params.idHome).then(()=>{
        res.status(204).send()
    }).catch(() =>{
        res.status(400).send()
    })
}

const findOnewithUser =(req, res)=>{
    
    Home.findOnewithUser(req.params.idHome).then(result=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(400).send(err)
    });
};


module.exports ={
    createHome,
    findAll,
    findOne,
    updateOneHome,
    destroyOneHome,
    dilitOneHome,
    findOnewithUser,
};


