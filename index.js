const express = require("express");
const path = require("path");

const expressEdge= require("express-edge");

const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Routes

const routeCars = require("./route/car");

 const UserRoute = require("./route/user")

 const OrderRoute = require("./route/order")
 

const app = express();

app.use(routeCars);

app.use(UserRoute);

app.use(OrderRoute);

app.use(methodOverride("_method"));


const AllData = require("./data");




app.listen(process.env.PORT || 3000,()=>{ return("The server is listening on port 3000")});

app.use(express.static('public'));

app.use(expressEdge);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.set('views',`${__dirname}/views`);


app.get('/',(req,res)=>{
    res.redirect('/api/v1')
})

app.get('/api/v1',(req,res)=>{
    res.render('index');
})

app.get('/api/v1',(req,res)=>{
    res.render('index');
})

app.get('/api/v1/admin',(req,res)=>{
    res.render('admin')
})
app.get('/api/v1/signup',(req,res)=>{
    res.render("signup")
})

app.get('/api/v1/signin',(req,res)=>{
    res.render("signin")
})

app.get('/api/v1/sell',(req,res)=>{
    res.render("sell");
})



app.get('/api/v1/catalog',(req,res)=>{
    res.render("purchase");
})



module.exports = app;
