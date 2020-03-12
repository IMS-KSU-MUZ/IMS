const express = require('express');
const { client } = require('./config/db');
var app = express();
const { tabels } = require('./models/tabels');
const { supervisors } = require('./queries/supervisor'); 
const { organizationss } = require('./queries/organizations');
const { vacancies } = require('./queries/vacancies');
const { student } = require('./queries/students');
const bodyParser = require('body-Parser')
var boolParser = require('express-query-boolean');
const cors = require('cors');




app.set('port', process.env.PORT || 4000);

app.use(boolParser());

app.use(bodyParser.json());


app.use('/api', require('./api/api.js'));



app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});