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




exports.postanAd=(req,res)=>{
    

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
            "created_on":body.created_on,
            "manufacturer":body.manufacturer,
            "model":body.model,
            "price":body.price,
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
    
    
   
}

exports.getAllCars = (req,res)=>{
    
    const ads = getAllCars
    const response={
        "status":200,
        "data":allcars
    }

    res.status("200").json(response);
    res.render("catalog",{ads:ads})
}
