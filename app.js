const express = require('express');
const app = express();

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
/*var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "john",
    password: "Pass1234",
    database: "testdb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/

app.get("/", (req, res) =>{
    console.log("Responding to root route");
    res.send("hello");
})

app.get("/login", (req, res) =>{
    //res.send("login page tbd");
    res.render("homepage.html", {uname: "Vishnu"});
})

app.listen(3000, () => {
    console.log("Server is listening");
});
