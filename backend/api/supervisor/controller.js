const model = require('./model');



listSupervisor = (req, res, next) =>{


    model.getSupervisorInfo((err, result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    });
}


module.exports = {
    listSupervisor
}