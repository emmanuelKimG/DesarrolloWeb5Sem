const mysql = require('mysql');
// const {config} =  require('./dbconfig');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '1234',
    database: 'car_rental',
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log("si se arma");
  });


  connection.query(`SELECT * from users`, (err, res, fields) => {
    if(err) throw err;
    console.log(res);
  })



module.exports = connection;