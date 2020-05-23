const express = require('express');
const app = express();
const mysql = require('mysql');

const body_parser = require('body-parser');

app.use(express.static('./pages'));
app.use(body_parser.urlencoded({extended: false}));

function get_connection(){
    
    return mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'password',
        database: 'database1'
    });
};



app.get("/", (req, res) =>{
    console.log("Responding to root route");
    res.send("hello");
});

app.listen(3000, () => {
    console.log("Server is listening");
}); 

app.get("/login", (req, res)  =>{

    const connection = get_connection();
    console.log("connection passed maybe?");
    const user_username = req.body.login_username;
    const user_password = req.body.login_password;
    console.log("fetching user with username: " + req.body.login_username);
    const query_string = "SELECT password FROM users WHERE username = ?";
    connection.query(query_string, [user_username], (err, results, fields) =>{
        console.log("authenticating");
        if(err){
            console.log("error" + err + " error");
            res.sendStatus(500);
            res.end();
            return;
        }

        console.log("fetched new user");
        res.send("success!");
        //need some response
    });

});

app.post("/signup", (req, res) => {
    console.log("creating user");
    const user_username = req.body.create_username;
    const user_password = req.body.create_password;
    const query_string = "INSERT INTO users (username, password) VALUES (?, ?)";
    const connection = get_connection();
    console.log("trying to register: " + user_username);
    connection.query(query_string, [user_username, user_password], (err, results, fields) =>{
        if(err){
            console.log("error");
            res.sendStatus(500);
            return;
        }
        else{
            console.log("user created!");
            res.send("new user created");
        }
    });
});


