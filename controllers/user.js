exports.userSignIn = (req,res)=>{

    var login =req.body;

    if(!login.email||!login.password){
        res.status(400).send("The data that you have sent is not valid ");
        return;
    }
 
    var dUser = AllData.find((elt)=> elt.user.email == login.email)
    
    if(dUser.user.password === login.password){
        var data ={
            "status":200,
            "data":{
                "id": dUser.user.id,
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
        console.log(AllData.length);
         var dataposted=req.body;
     
         if(dataposted.firstName&&dataposted.lastName&&dataposted.email)
         {
             var data= {
                 status:200,
                 data:{
                     id:AllData.length+1,
                     first_name:req.body.firstName,
                     last_name:req.body.lastName,
                     email:req.body.email
                 }
     
             }
     
             var newUser= data.data;
             AllData.push(newUser);
             res.send(data);
         }
         else{
             res.status(400).send("The input is not correct");
         }
     
         
         
     
         
     
     }
    