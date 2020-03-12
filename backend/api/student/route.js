
var express = require('express');
var router = express.Router();
const controller = require('./controller');




router.get('/:id',controller.getStuedntController)


router.delete ('/:id',controller.deleteStudentController)// api/student/


router.patch('/:id',controller.patchStudentController)//supervisor_id , organization_id , cv ,vacancy_id  assign student to vacancy and organization and supervisor 


router.post('',controller.postStudentController)//id , name , email  , gpa  || creating new student 


router.get('',controller.listStudentController)



module.exports = router;


