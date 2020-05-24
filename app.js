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

function get_selected_option(selected_item){
    var opt;
    for(var i = 0, len = selected_item.length; i < len; i++){
        opt = selected_item.options[i];
        if(opt.selected === true){
            break;
        }
    }
    return opt;
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

app.post("/schedule", (req, res) => {
    console.log("scheduling a trip");
    const street_num = req.body.street_num;
    const street_addr = req.body.street_addr;
    const zipcode = req.body.zipcode;
    const airline = req.body.airline;
    //const month = get_selected_option(req.body.month);
   // const day = get_selected_option(req.body.day);
    const year = "2020";
    const time = req.body.time;

    console.log(street_num);
    console.log(street_addr);
    console.log(zipcode);
    console.log(airline);
    //console.log(month);
   // console.log(year);
    console.log(time);
});


