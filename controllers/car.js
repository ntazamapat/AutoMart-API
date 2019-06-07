
const express = require("express");
const app = express();
const expressEdge= require("express-edge");
app.use(expressEdge);



var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'dmgeldhs1', 
  api_key: 894563545515723, 
  api_secret: "Ep_yVemD18IJ5EnQmyjexND-iJk"
});




const AllData = require("../data");
var allcars = [];
function getAllCars(data){

  for(var i=0;i<data.length;i++){
      var cars = data[i].user.cars;
      allcars.push(cars);
  }
  // allcars = allcars.flat(1);
  var merged = [].concat.apply([], allcars);
   allcars = merged;
}

getAllCars(AllData);



var allorders =[];
function getAllOrders(data){

  for(var i=0; i<data.length;i++){
      var order = data[i].order;
      allorders.push(order);
      }
     
}



getAllOrders(allcars);


exports.getHomepage=(req,res)=>{

    const cars= allcars
    res.render('index',{cars});
}

exports.postanAd=(req,res)=>{
    
    cloudinary.uploader.upload(req.file.path, function(result) {
        // add cloudinary url for the image to the campground object under image property
        req.body.image = result.secure_url;

        
    var  body = req.body;


   
    if(!body.email||!body.price||!body.state||!body.model)
    {
        res.status(404).send("The data that you have entered is not correct");
        return
    }

    var data = AllData.find(elt => elt.user.email == body.email);
    
    if(data){
        var car = {
            "id":allcars.length+1,
            "email":body.email,
            "created_on":Date.now(),
            "manufacturer":body.manufacturer,
            "model":body.model,
            "price":body.price,
            "url":req.body.image,
            "state":body.state,
            "status":body.status
        }
        var newdata = {
            "status":200,
            "data":car
        }
        data.user.cars.push(car);
        allcars.push(car);
       return  res.json(newdata);
    }
    else{
       return  res.status(400).send('You can not post an Ad unless you are logged in!')
    }
        
      });

    
    
   
}

exports.getAllCars = (req,res)=>{
    
    const ads = allcars;
    const response={
        "status":200,
        "data":allcars
    }

    console.log(ads); 
    res.render("catalog",{ads:ads})
}
