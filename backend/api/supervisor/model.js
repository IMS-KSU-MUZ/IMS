const { client } = require('../../config/db');

getSupervisorInfo = (callback)=>{

    client.query('SELECT * FROM supervisor', function (err, result) {
        console.log('orgs')
        if (err) {
            console.log(err);
            callback(err);
        }
        callback(null, result.rows);
    });
};




module.exports  = {
    getSupervisorInfo: getSupervisorInfo
}