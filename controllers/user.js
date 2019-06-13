
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
exports.userSignIn = (req,res)=>{

    var login =req.body.email;
    var password=req.body.password;
    const registeredUser =AllData.find(elt=>{
        if(elt.user.email ==login && elt.user.password ==password ){
            return elt;
        }

        
    })
     
    if(registeredUser)
    {
         AllData[0].session = login
        
        const response={
            "status":200,
            "data":{
                "id":registeredUser.user._id,
                "first_name":registeredUser.user.firstName,
                "last_name":registeredUser.user.lastName,
                "email":login
            }
           
        }
        res.json(response)    }
    else{
        const error = {
            "status":400,
            "error":"The username or password is not correct"

        }
        res.json(error);
    }

   
    }


    exports.userSignUp = (req,res)=>{
     
         var dataposted=req.body;
         console.log(dataposted);
     
         if(dataposted.first_name&&dataposted.last_name&&dataposted.email)
         {
             var data= {
                 status:200,
                 data:{
                     id:AllData.length+1,
                     first_name:req.body.first_name,
                     last_name:req.body.last_name,
                     email:req.body.email
                 }
     
             }
     
             var newUser= data.data;
             AllData.push(newUser);
             res.send(data);
         }
         else{
             const error = {
                 "status":400,
                 "error" :"The input is not correct!"
             }
             res.json(error);
         }
     
         
         
     
         
     
     }
    