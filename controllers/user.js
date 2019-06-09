
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

    var login =req.body;

    if(!login.email||!login.password){
        const error = {
            "status":400,
            "error": "Please enter password and username"
            
            
        }
        res.json(error);
        return;
    }
 
    var dUser = AllData.find((elt)=> elt.user.email == login.email)
    if(dUser == undefined)
    {
        const error ={
            "status":404,
            "error":"The user does not exist!"
        }
        res.send(error);
        return;
    }
      
    else if(dUser.user.password === login.password){
        var data ={
            "status":200,
            "data":{
                "id": dUser.user._id,
                "firstName":dUser.user.firstName,
                "lastName":dUser.user.lastName,
                "email":dUser.user.email
            }
        }
        
        res.send(data);
        }
        else{
            // Au cas ou le mot de passe ou email ne sont pas corrects
            res.status(400).send("The password or login is not correct");
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
    