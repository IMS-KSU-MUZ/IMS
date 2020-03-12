const model = require('./model');





listStudentController = (req, res, next) => {
    console.log("header query ",typeof(req.query.haveOrgs))
    if (req.query.haveOrgs) {
        console.log('IF')
        model.listStudentModel((err, result) => {
            if (err) {
                res.json(err)
            }
            res.json(result)
        });
    } else  {
        console.log('else if')
        model.listStudentModelNoOrgs((err, result) => {
            if (err) {
                res.json(err)
            }
            res.json(result)
        });
    }
    
    
}


getStuedntController = (req, res, next) => {
    model.getStudentInfo(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
        }
        res.json(result)
    })

}


deleteStudentController = (req, res, next) => {
    console.log(req.params)
    model.deleteStudentModel(req.params.id, (err, result) => {
        if (err) {
            res.json(err)
        }
        res.json(result)
    })

}


patchStudentController = (req, res, next) => {

    model.patchStudentModel(req.body, (err, result) => {
        console.log('hot')
        if (err) {
            res.json(err)
        }
        res.json(result)
    });
}


postStudentController = (req, res, next) => {
    model.postStudentModel(req.body, (err, result) => {
        if (err) {
            res.status(400).json({ errorMessage: err.detail })
        }
        res.json(result)
    })

}


module.exports = {
    listStudentController,
    patchStudentController,
    getStuedntController,
    postStudentController,
    deleteStudentController
}

