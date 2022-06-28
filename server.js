const express = require("express");
const app = express();


app.listen(5000,()=>{
    console.log("listening to " + 5000);
})


//require to load images.
app.use(express.static(__dirname+'/'));


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})