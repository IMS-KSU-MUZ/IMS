const { client } = require('../../config/db');



listStudentModel=(callback)=>{

    client.query('SELECT   * FROM student ', function (err, result) {

        if (err) {
            console.log(err);
            callback(err);

        }
        

        callback(null, result.rows);
    });
};

listStudentModelNoOrgs=(callback)=>{

    client.query('SELECT    id, name, gpa   FROM student  WHERE supervisor_id IS NULL AND organization_id IS NULL AND vacancy_id IS NULL', function (err, result) {

        if (err) {
            console.log(err);
            callback(err);

        }
        

        callback(null, result.rows);
    });
};



deleteStudentModel=(id,callback)=>{


    client.query('DELETE FROM student WHERE id=($1) ',[id],function (err, result) {

        if (err) {
            console.log(err);
            callback(err);

        }
        
        callback(null, result.rows[0]);
    });
};


getStudentModel=(id,callback)=>{


    client.query('SELECT  student.id as id , student.name as name,supervisor.name as supervisor_name, organization.name as orgaization_name,vacancies.job_title,student.gpa as gpa ,student.cv as cv  FROM student ,supervisor,organization ,vacancies WHERE supervisor.id=student.supervisor_id and organization.id= student.organization_id and vacancies.id=student.vacancy_id  and student.id=($1)',[id],function (err, result) {

        if (err) {
            console.log(err);
            callback(err);

        }
        
        callback(null, result.rows[0]);
    });
};


postStudentModel=(body,callback)=>{


    client.query("INSERT INTO student( id , name , email  , gpa  ) values($1, $2,$3,$4);",[body.id,body.name,body.email,body.gpa], function (err, result){

        if (err) {
            console.log(err);
            callback(err);

        }
        
        callback(null, result);
    });

};


patchStudentModel=(body,callback)=>{///supervisor_id , organization_id , cv ,vacancy_id  
   
client.query( 'UPDATE student SET organization_id=($2),  vacancy_id=($3) WHERE student.id=($1)', [body.id,body.organization_id,body.vacancy_id], function (err, result) {
        if (err) {
            console.log(err);
            callback(err);

        }

        callback(null, result.rows);
    });
}










module.exports  = {
    listStudentModelNoOrgs:listStudentModelNoOrgs,
    listStudentModel:listStudentModel,
    getStudentModel:getStudentModel,
    postStudentModel:postStudentModel,
    deleteStudentModel:deleteStudentModel,
    patchStudentModel:patchStudentModel
}