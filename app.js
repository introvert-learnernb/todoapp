const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connection of mongodb with mongoose

mongoose.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//middleware

app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));
app.set("view engine", "ejs");

//routes

app.use(require("./routes/index"))
app.use(require("./routes/todo"))




//Server Configuration
app.listen(3000, ()=>{
    console.log("Server is Listening at port no. 3000");
})