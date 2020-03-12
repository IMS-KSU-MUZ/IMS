const { client } = require('../../config/db');

getTrainingCommitteesInfo = (callback)=>{

    client.query('SELECT * FROM training_committee', function (err, result) {
        console.log('orgs')
        if (err) {
            console.log(err);
            callback(err);
        }
        callback(null, result.rows);
    });
};




module.exports  = {
    getTrainingCommitteesInfo: getTrainingCommitteesInfo
}