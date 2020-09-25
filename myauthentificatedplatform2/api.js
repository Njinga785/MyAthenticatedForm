const express = require('express');  
let app = express(); 
const bodyParser = require('body-parser');  
const mysql = require('mysql2'); 
const jwt = require('jsonwebtoken');
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydb'
  });
  
  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });  
  
  



  app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });