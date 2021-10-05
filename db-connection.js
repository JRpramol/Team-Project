var mysql = require('mysql');

var con = mysql.createConnection({
    host: "us-cdbr-east-04.cleardb.com",
    user: "b8392740cb5edc",
    password: "20ad70dc"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });