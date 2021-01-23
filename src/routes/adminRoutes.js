const express =  require('express');
// const  Mongoose  = require('mongoose');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');


function router(navv){
   
  
    adminRouter.get('/',function(req,res){
        res.render("addbooks",
        {
            navv,
             title: 'Library',
            
            });
    });

    adminRouter.post('/add',function(req,res){
    
    
    const item = {
           title:  req.body.title,
           author:  req.body.author,
           genre:  req.body.genre,
           image:  req.body.image
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
   
    });
    
    
   
    return adminRouter;

}


module.exports = router;