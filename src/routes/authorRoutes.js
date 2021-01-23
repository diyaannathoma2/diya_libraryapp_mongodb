const express =  require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');



function routers(navv){
 

    
    authorsRouter.get('/',function(req,res){

        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
                navv,
                 title: 'Library',
                authors
                });

        });


       
    });
    
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id

        Authordata.find()
        .then(function(authors){
            res.render("author",{
                navv,
                title: 'Library',
                author: authors[id]
        
        
            });
           

        });

       
    });

    authorsRouter.get('/delete/:id',function(req,res){
        Authordata.deleteOne({_id:req.params.id})
        .then(function(){
            res.redirect('/authors');
        })
           
       
    });



  


    authorsRouter.get('/editauthor/:id',function(req,res){
       

        Authordata.findOne({_id:req.params.id})
        .then(function(author){
            res.render("editauthor",{
                navv,
                title: 'Library',
                author
        
        
            });
           

        });

       
    });

    authorsRouter.post('/editauthor/:id/submit',function(req,res){
        const item = {
                       title:  req.body.title,
                       author:  req.body.author,
                       genre:  req.body.genre,
                       image:  req.body.image
                    }
    
       Authordata.updateOne({_id:req.params.id},item)
       .then(function(){
           res.redirect('/authors');
       })

       
        });
        


       
    



    return authorsRouter;

}


module.exports = routers;