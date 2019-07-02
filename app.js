var express = require("express");
    app = express();
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname +"/public"));
app.use(express.static(__dirname +"/public/uploads"));
app.get("/", (req, res) =>{
    res.render("index")
})


app.listen(3000, ()=>{
    console.log("http://localhost:3000");
})