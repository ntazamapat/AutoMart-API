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
        res.status(400).send("The data that you entered is not correct!")
    }
    
    // Find if the user exist
    var userF = AllData.find(elt=>elt.user.id == body.buyer);
 
    // Get all the cars of the user
    var userCars = userF.user.cars;
     // Find if the user has the car_id in his cars
    var isCar= userCars.find(elt=>elt.id ==body.car_id);
    
    if(userF){
        var car={
            "id":allorders.length+1,
            "car_id":isCar.id,
            "created_on":isCar.created_on,
            "status":isCar.status,
            "price":isCar.price,
            "price_offer":body.amount
        }
        isCar.order = {
          "id":allorders.length+1,
          "car_id":isCar.id,
          "buyer":userF.user.id,
          
        }
        allorders.push(isCar.order);
        var data={
            "status":200,
            "data":car
        }
        res.send(data)
    }else{
        res.status(400).send("Your order is not valid!")
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

exports.getorder