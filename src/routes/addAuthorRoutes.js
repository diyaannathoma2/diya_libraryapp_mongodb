const express = require('express');
const addAuthorRoutes = express.Router();
const Authors = require('./authorRoutes');
const Authordata = require('../model/Authordata'); 

function router(navv){
    // var fs = require("fs");
    // var FileReader = require('filereader')
    // var fileReader = new FileReader();
    // addAuthorRoutes.use(bodyParser.urlencoded({ extended: false }));   
    // addAuthorRoutes.use(bodyParser.json()); 

    addAuthorRoutes.get('/', function(req,res){
        res.render("addauthor", 
        {
            navv,
            title: 'Library'
        }); 
    });
    
    addAuthorRoutes.post('/submit', function(req,res){
        // var author = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        // authors.push(author);

        const item = {
            title:  req.body.title,
            author:  req.body.author,
            genre:  req.body.genre,
            image:  req.body.image
         }
         var author = Authordata(item);
         author.save();
         res.redirect('/authors');
    
     });

    // fileReader.onload = function(event){
    //     let imageUrl = fileReader.result;
    //     $("#preview").attr("src", `${imageUrl}`);
    // }
    // fileReader.readAsDataURL();
    

    return addAuthorRoutes
}

module.exports = router;