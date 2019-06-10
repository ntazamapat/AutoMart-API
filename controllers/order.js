const express = require("express");
const app = express();
const expressEdge= require("express-edge");
app.use(expressEdge);

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
exports.purchaseOrder = (req,res)=>{
   
   
    var body = req.body;
    
    
   
    if(!body.amount||!body.buyer){
        const error = {
            "status":400,
            "error": "Please enter all the data"
        }
        res.json(error);
    }
    
    // Find if the user exist
    var userF = AllData.find(elt=>elt.user._id == body.buyer);
   
    // if(!userF){
    //     const error={
    //         "status":404,
    //         "error":"There is no user with such ID"
    //     }
    //     res.json(error);
    //     return;
    // }
 
    // Get all the cars of the user
    var userCars = userF.user.cars;
    var car = allcars.find(elt=>elt.id==body.car_id)
    
     // Find if the user has the car_id in his cars
    // var isCar= userCars.find(elt=>elt.id ==body.car_id);
    // if(!isCar){
    //     const err ={
    //         "status":404,
    //         "error":"There is no car with the entered Id"
    //     }
    //     res.json(err);
    // }
    
    if(car){
        const carUp={
            "id":allorders.length+1,
            "car_id":car.id,
            "created_on":car.created_on,
            "status":car.status,
            "price":car.price,
            "price_offer":body.amount
        }
        carUp.order = {
          "id":allorders.length+1,
          "car_id":car .id,
          "buyer":userF.user.id,
          
        }
        allorders.push(carUp.order);
        var data={
            "status":200,
            "data":carUp
        }
        res.send(data)
    }else{
        const err ={
                    "status":404,
                    "error":"Your order is not valid!"
                }
                res.json(err);
    }


}

exports.updateOrder = (req,res)=>{

    var order_id = req.params.id;
    var price = req.params.price;

    var order = allorders.find(elt =>elt.id == parseInt(order_id));
    var car  = allcars.find((elt)=>elt.id == parseInt(order.car_id));
    var userID = car.owner;

   
    
    res.send(car);
 

    if(order&&order.status == "pending"){
        
        var data = {
            "status":200,
            "order":{
                "id":allorders.length+1,
                "car_id": "",
                "status":order.status,
                 "order_price_offered":order.amount,
                 "new_price_offered":price
            }
          
        }
        order.amount =price;
        res.send(data);
    }

    else{
        res.status(404).send("You can not update the data");
    }
    

    // Update the bigger Array
    
    

}

