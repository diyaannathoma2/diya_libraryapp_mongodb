const express = require('express');
const loginRouter = express.Router();



const Userdata = require('../model/Usersdata');

function routerrss(navss){
   
    
    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            navss,
             title: 'Library',
           
            });
    });
    loginRouter.post('/welcome',function(req,res){
        
        // if((Userdata.findOne({name:req.body.name}))&&(Userdata.findOne({password:req.body.password})){
        //   res.redirect('/welcome');  
        // }
       


         
    // const item = {
    //     name:  req.body.name,
    //     password:  req.body.password
       
    //  }
    //  if (Userdata.find(item)) {
        
    //      res.redirect('/welcome');
         
    //  }
    // else {
    //     res.send('Incorrect Username or password');
         
    //  }


    // const item = {
    //     name:  req.body.name,
    //     password:  req.body.password
       
    //  }
     Userdata.findOne({name:req.body.name}) 
     .then(function(user){
         if (user.password == req.body.password) {
            res.redirect('/welcome');
         }
        
    
        
     })
     .catch(function(){
        //  res.redirect('/books');
         res.send("Incorrect Username or Password!!!");
     })

     
    // res.redirect('/welcome');
     
        
       
         
   
      
        
    })
    
 
    return loginRouter;

}


module.exports = routerrss;