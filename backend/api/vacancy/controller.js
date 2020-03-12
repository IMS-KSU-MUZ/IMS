const model = require('./model');



listVacancyController = (req, res, next) =>{


    model.listVacanciesModel((err, result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    });
}


module.exports = {
    listVacancyController
}