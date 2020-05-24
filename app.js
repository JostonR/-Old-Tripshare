const express = require('express');
const app = express();

const body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended: false}));


app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var mysql = require("mysql");


function get_connection(){
    return mysql.createConnection({
        host: "localhost",
        user: "john",
        password: "Pass1234",
        database: "testdb"
    });
};



app.get("/", (req, res) =>{
    console.log("Responding to root route");
    res.send("hello");
})

app.get("/login", (req, res) =>{
    //res.send("login page tbd");
    res.render("homepage.html", {uname: "Vishnu"});
})

app.post("/insert", (req, res) =>{
  var connection = get_connection();
  connection.connect(function(err) {
    if (err) throw err;
    const username = req.body.create_username;
    console.log(username);
    const password = req.body.create_password;
    const time = req.body.create_time;
    console.log(time);
    const query_string = "INSERT INTO user (email, pword) VALUES (?, ?)";
    connection.query(query_string, [username, password], function (err, result, fields) {
      if (err) throw err;
      res.redirect('http://google.com');
    });
  });
    /*var connection = get_connection()
    const username = req.body.create_username;
    console.log(username);
    const password = req.body.create_password;
    const query_string = "INSERT INTO user (username, pword) VALUES (?, ?)";
    connection.query(query_string, [username, password], (err, results, fields)=>{
      if(err){
          console.log("error");
          res.sendStatus(500);
          return;
      }
      else{
          console.log("user created!");
          res.send("new user created");
      }
    })*/

})

app.listen(3000, () => {
    console.log("Server is listening");
});
