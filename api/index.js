const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//var mysql = require('mysql2');
const app = express();
 
const routes = require('./src/routes/lesroutes')


app.use(bodyParser.json());

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "mydb"
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");

//   app.post("/sign-up", (req, res) => {
//     bcrypt.genSalt(saltRounds, (err, salt) => {
//       bcrypt.hash(req.body.password, salt, (err, hash) => {
//         console.log(hash)
//         var sql = `INSERT INTO users (name, email,password) VALUES ('${req.body.name}', '${req.body.email}', '${hash}')`;
//         con.query(sql, hash, function (err, result) {
//           if (err) throw err;
//           //  
//           res.send('1 nouvau user a étè ajouté')
//         });
//       });
//     });


//   })
//   app.post('/sign-in', (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     con.query(`SELECT * FROM users WHERE email = '${req.body.email}'`,  function (err, result) { 
//       console.log(result);
//       if (err) {
//         res.send('non')
//       } else {
//         if (result.length > 0) {
//            bcrypt.compare(password, result[0].password, function (error, results) {
//              console.log(results)
//             if(results === true){
//               console.log('your recognize')
//             }else{
//               console.log('who are you') 
//               console.log(results);
//             }
      
//           })
//         }else{
//           console.log('faux mail')
//         }
      
//       }
    
//     })
//   })
// })











app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});