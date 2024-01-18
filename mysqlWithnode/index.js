const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "school"
});

con.connect(function (error) {
    if (error) error;
    console.log('connection succesful')
})