
const express = require("express");
const app = express();
const expressEdge= require("express-edge");
const methodOverride = require("method-override");

const path = require("path");

app.use(expressEdge);
app.use(methodOverride("_method"))



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
        const error ={
            "status":404,
            "error":"The data that you have entered is not correct"
        }
        res.json(error);
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
        const err ={
            "status":400,
            "error": "You need to be logged in to be able to post an Ad!"
        }
        res.json(err);
    }
    
        
      });

    
    
   
}

exports.getAllCars = (req,res)=>{
    // getAllCars(AllData);
    // When searching for query string status
    if(req.query.min_price || req.query.min_price )   
            {
                
                const minPrice = req.query.min_price;
                const maxPrice =req.query.max_price;
              
                var availableCars = allcars.filter(elt =>elt.status=="available");
                
                const priceRangeCars = availableCars.filter(elt =>{
                    if(elt.price>parseInt(minPrice) && elt.price<parseInt(maxPrice))
                    {
                        return elt
                    }
                });
                if(priceRangeCars.length>0)
                {
                    var response = {
                        "status":200,
                        "data":priceRangeCars
                    }
                    res.json(response)
                }
                else{
                    var error = {
                        "status":400,
                        "error":"There are no cars in the specified price range"
                    }
                    res.json(error)

                }
                
               
            }
            else if(req.query.status){
                var status = req.query.status;
                var availableCars = allcars.filter(elt =>elt.status===status);
              
                if(!availableCars)
                {
                    const err ={
                        "data":404,
                        "error":"There is no available car"
                    }
                    res.json(err);
                    return;
                }
             
                
            
                var response = {
                    "status":200,
                    "data":availableCars
                }
            
                res.json(response);   
            }
            

    res.json(allcars)
   
}

exports.getCar=(req,res)=>{
    var carId = req.params.id;
     var car = allcars.find(elt=>elt.id === parseInt(carId));
     if(!car){
         res.status(404).send("The requested car does not exist");
         return;
     }

     var response = {
         "status":200,
         "data":car
     }

     res.send(response);


}



exports.updateCarStatusId = (req,res)=>{
    
  
    var carId= req.params.id;
    
    
    var car = allcars.find(elt=>elt.id === parseInt(carId));
    var user = AllData.find(elt=>elt.user._id == car.owner)
    if(user.email !== AllData[0].session)
    {
        res.send("you can not update this data !")
    }
    if(!car || !user){
        const err ={
            "status":400,
            "error":"Please specify your user ID or Car ID"
        }
        res.json(err);
        return
    }
    
    
    const newC = user.user.cars.find(elt=>elt.id ==parseInt(carId));
   
    newC.status="sold";
    
    var response = {
        "status":200,
        "data":{
            "id":carId,
            "email":user.email,
            "created_on":Date(),
            "manufacturer":newC.manufacturer,
            "model":newC.model,
            "price":newC.price,
            "state":newC.state,
            "status":newC.status

        }

    }
    res.send(response);
    

}

exports.updateCarIDPrice = (req,res)=>{
  
    var carId= req.params.id;
    var price=req.body.price;
   
    var car = allcars.find(elt=>elt.id === parseInt(carId));
    var user = AllData.find(elt=>elt.user._id == car.owner);
    if(!car){
        const error ={
            "status":400,
            "error":"You can not update the price"
        }
        res.json(error);
        return;
    }
    const newC = user.user.cars.find(elt=>elt.id ==parseInt(carId));
   
   
    newC.price=price;
    
    var response = {
        "status":200,
        "data":{
            "id":carId,
            "email":user.email,
            "created_on":Date(),
            "manufacturer":newC.manufacturer,
            "model":newC.model,
            "price":newC.price,
            "state":newC.state,
            "status":newC.status

        }

    }
    res.json(response);
    


}


exports.deleteCar = (req,res)=>{
    
    var carId= req.params.id;
    var car = allcars.find(elt=>elt.id === parseInt(carId));
    if(!car){
        var error={
             "status":404,
             "error":"The car can not be delete"
        }
        res.json(error);
        return;
    }
    var user = AllData.find(elt=>elt.user._id === car.owner);
    
    
    var newC = user.user.cars.find(elt =>elt.id == parseInt(carId));
    var carArray = user.user.cars;
    
    var indexCar = carArray.findIndex(elt=>elt.id ==newC.id);
    
    carArray.splice(indexCar,1);
    allcars.splice(indexCar,1);
    res.send(allcars);
    res.send(carArray);

    var response ={
        "status":200,
        "data":"Car Ad successfully deleted"
            }
     res.json(response);     
    
}

exports.getIDforEdit = (req,res) =>{
    const carId= req.params.id;
    const car = allcars.find(elt=>elt.id === parseInt(carId));
    res.render("sellEdit",{car})

}
exports.getIDforEditP = (req,res) =>{
    const carId= req.params.id;
    const car = allcars.find(elt=>elt.id === parseInt(carId));
    res.render("sellEditP",{car})

}


