const express = require("express");

const path = require("path");

const expressEdge= require("express-edge");

const bodyParser = require("body-parser");

// Routes

const routeCars = require("./route/car");


const app = express();

app.use(routeCars);



const AllData = require("./data");





app.listen(3000,()=>{ return("The server is listening on port 3000")});

app.use(express.static('public'));

app.use(expressEdge);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.set('views',`${__dirname}/views`);



app.get('/api/v1',(req,res)=>{
    res.render('index');
})

app.get('/api/v1/admin',(req,res)=>{
    res.render('admin')
})

app.get('/api/v1/sell',(req,res)=>{
    res.render("sell");
})

app.get('/api/v1/catalog',(req,res)=>{
    res.render("catalog");
})



module.exports = app;