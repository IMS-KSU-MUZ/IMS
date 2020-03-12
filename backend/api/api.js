
const express = require('express')
var api = express.Router()

api.use('/organization', require('./org/route'));
api.use('/student', require('./student/route'));
api.use('/supervisor', require('./supervisor/route'));
api.use('/trainingcommittee', require('./training-committee/route'));
api.use('/vacancy', require('./vacancy/route'));
api.use('/document', require('./document/route'));




module.exports = api