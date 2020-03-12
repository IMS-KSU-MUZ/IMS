const model = require('./model');



listOrganizationController = (req, res, next) =>{


    model.getOrganizationModel((err, result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    });
}


module.exports = {
    listOrganizationController
}