const model = require('./model');



listDocument = (req, res, next) =>{


    model.getDocumentsInfo((err, result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    });
}


module.exports = {
    listDocument
}