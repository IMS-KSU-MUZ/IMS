const { client } = require('../../config/db');

getDocumentsInfo = (callback)=>{

    client.query('SELECT * FROM document', function (err, result) {
        console.log('orgs')
        if (err) {
            console.log(err);
            callback(err);
        }
        callback(null, result.rows);
    });
};




module.exports  = {
    getDocumentsInfo: getDocumentsInfo
}