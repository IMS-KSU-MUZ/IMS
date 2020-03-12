const model = require('./model');



listTrainingCommittee = (req, res, next) =>{


    model.getTrainingCommitteesInfo((err, result)=>{
        if(err){
            res.json(err)
        }
        res.json(result)
    });
}


module.exports = {
    listTrainingCommittee
}