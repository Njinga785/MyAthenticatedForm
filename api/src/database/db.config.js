const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydb'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });  
  module.exports = connection;