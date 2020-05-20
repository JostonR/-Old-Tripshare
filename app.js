const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    console.log("Responding to root route");
    res.send("hello");
})

app.listen(3000, () => {
    console.log("Server is listening");
});