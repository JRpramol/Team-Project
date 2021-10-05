
const mysql = require('mysql');

// Create a connection to the database
const db = mysql.createPool({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b8392740cb5edc',
    password: '20ad70dc',
    database: 'heroku_30466051e354b84',
    charset: 'utf8mb4'
});

module.exports = db;