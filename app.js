const express = require('express');
const app = express();
const mysql = require('mysql');

app.get("/", (req, res) =>{
    console.log("Responding to root route");
    res.send("hello");
})

app.listen(3000, () => {
    console.log("Server is listening");
}); 

app.get("/login", (req, res)  =>{
    console.log("fetching user with username: " + req.params.id);

    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user:'root',
        database: 'local_database'
    });

    const query_string = "SELECT COUNT(*) FROM users WHERE username ='?' and password =?"
});
