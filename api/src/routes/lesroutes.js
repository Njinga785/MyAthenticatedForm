const express = require('express'); 
const routes = express.Router(); 
const db = require('../database/db.config.js'); 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(10); 
const config = require('./config.js')

routes.post("/sign-up", (req, res) => {
  console.log("POST /sign-up");
  console.log(req.body);
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      console.log(hash)
      var sql = `INSERT INTO users (name, email,password) VALUES ('${req.body.name}', '${req.body.email}', '${hash}')`;
      db.query(sql, hash, function (err, result) {
        if (err) throw err;
        let token = jwt.sign({ id: result.id }, config.secret, {expiresIn: 86400});
        res.send({token: token})
      });
    });
  });


})
routes.post('/sign-in', (req, res) => {
  //const email = req.body.email;
  const password = req.body.password;
  db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`,  function (err, result) { 
    console.log(result);
    if (err) {
      res.send('non')
    } else {
      if (result.length > 0) {
         bcrypt.compare(password, result[0].password, function (error, results) {
           console.log('sighn innnnnnnnn',results)
          if(results === true){ 
            let token = jwt.sign({ email: req.body.email }, config.secret, {expiresIn: 86400});

            res.send({token: token})
            console.log('your recognize')
          }else{
            console.log('who are you') 
            console.log(results);
          }
    
        })
      }else{
        console.log('faux mail')
      }
    
    } 
  
  })
}) 
module.exports = routes;