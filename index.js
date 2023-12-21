const express = require("express");
const sendEmail= require("./controllers/sendEmail");
const app= express();
let PORT= 5000;

app.get("/", (req, res) => {
    res.send("I am a server");
});

app.get("/email", sendEmail);

const start= async()=> {
    try {
        app.listen(PORT,()=>{
            console.log("I am live at port no 5000");
        });
    } catch (error) {
        
    }
}


start();