const express = require('express');
const crossOrigins = require('cors');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const bearerToken = require('express-bearer-token');
const mySqlDbQueries = require('./dbQueries');

var conn = mySql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root@123",
    database:"pizel_chatbot"
});

const port = 8050;

const myApp = express()
.use(crossOrigins())
.use(bodyParser.json())
.use(bearerToken())
.use(mySqlDbQueries(conn));

myApp.listen(port,()=>{
    console.log(`Express Server Listening on port ${port}`);
})
