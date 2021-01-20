const express = require("express");
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mysql = require("mysql");
const pages = require("./routes/pages.js");


const app = express();
app.use("/", pages);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'mySite'    
});

con.connect(function(err)
{
    if(err) throw err;
    
    console.log("connected");
});

app.post("/register",function(req,res)
{   
    let sql = `INSERT INTO users (name, email, number, password ) 
                VALUES ('${req.body.name}', '${req.body.email}', '${req.body.number}', '${req.body.password}' )`;
    con.query(sql,(err)=>
    {
        if(err) 
        {
            console.log(err);
        }
        res.render("account");
    })
});

app.post("/account",function(req,res)
{    
    let number = req.body.number;    
    if(number == "6001729089")
    {
        res.render("admin/admin");
    }
    let sql = `SELECT number FROM users WHERE number = "${number}"`;
    con.query(sql,function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.redirect("account");
        }

        if(result)
            res.render("/");           
    })    
});

app.listen(3000, function(req,res)
{
    console.log("Server started on 3000");
});