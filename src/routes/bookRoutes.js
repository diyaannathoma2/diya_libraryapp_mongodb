const express =  require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');


function router(navv){
  
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
        {
            navv,
             title: 'Library',
            books
            });

        });

        
    });



   
   
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        Bookdata.find()
        .then(function(books){
            res.render("book",{
                navv,
                title: 'Library',
                book: books[id]
        
        
            })
           

        });
       
    });




    

    booksRouter.get('/delete/:id',function(req,res){
        Bookdata.deleteOne({_id:req.params.id})
        .then(function(){
            res.redirect('/books');
        })
           
       
    });








  
    booksRouter.get('/editbook/:id',function(req,res){
        // const id = req.params.id

        Bookdata.findOne({_id:req.params.id})
        .then(function(book){
            res.render("editbook",{
                navv,
                title: 'Library',
                book
        
        
            });
           

        });

       
    });
   



    booksRouter.post('/editbook/:id/submit',function(req,res){
        const item = {
                       title:  req.body.title,
                       author:  req.body.author,
                       genre:  req.body.genre,
                       image:  req.body.image
                    }
    
       Bookdata.updateOne({_id:req.params.id},item)
       .then(function(){
           res.redirect('/books');
       })

       
        });


        // findOneAndUpdate


    



   

  
    return booksRouter;

}


module.exports = router;