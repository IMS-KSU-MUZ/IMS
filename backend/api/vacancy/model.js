const { client } = require('../../config/db');

listVacanciesModel = (callback)=>{

    client.query('SELECT * FROM vacancies', function (err, result) {
        if (err) {
            console.log(err);
            callback(err);
        }
        callback(null, result.rows);
    });
};




module.exports  = {
    listVacanciesModel: listVacanciesModel
}