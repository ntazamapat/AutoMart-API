const express = require("express");

const path = require("path");

const expressEdge= require("express-edge");

const app = express();

app.listen(3000,()=>{ return("The server is listening on port 3000")});

app.use(express.static('public'));

app.use(expressEdge)


app.set('views',`${__dirname}/views`);



app.get('/api/v1',(req,res)=>{
    res.render('index');
})

app.get('/admin',(req,res)=>{
    res.render('admin')
})



