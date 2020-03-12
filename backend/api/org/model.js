const { client } = require('../../config/db');

getOrganizationModel = (callback)=>{

    client.query('SELECT id,name FROM organization   ', function (err, result) {
        if (err) {
            console.log(err);
            callback(err);
        }
        callback(null, result.rows);
    });
};




module.exports  = {
    getOrganizationModel: getOrganizationModel
}