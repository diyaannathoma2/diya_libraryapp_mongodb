const express =  require('express');
const app = new express();
// const port = process.env.PORT || 5000;




const navss = [
    {link:'/signup',name:'SignUp'}
    
   
]
const navs = [
    
    {link:'/login',name:'Login'}
    
    
    
]
const nav = [
    {link:'/signup',name:'SignUp'},
    {link:'/login',name:'Login'}
]
const navv = [
    // {link:'/welcome',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    
    {link:'/addauthor',name:'Addauthor'},
    {link:'/admin',name:'Addbooks'},
    {link:'/',name:'Logout'}
    
]

 

const booksRouter = require('./src/routes/bookRoutes')(navv)
const adminRouter = require('./src/routes/adminRoutes')(navv)
const authorsRouter = require('./src/routes/authorRoutes')(navv)
const signupRouter = require('./src/routes/signupRoutes')(navs)
const loginRouter = require('./src/routes/loginRoutes')(navss)
const welcomeRouter = require('./src/routes/welcomeRoutes')(navv)
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(navv)



app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
// app.use('/addbook',addBookRouter);
app.use('/addauthor',addAuthorRouter);

app.use('/welcome',welcomeRouter);




app.get('/',function(req,res){
    res.render("index",
    {
         nav,
         title: 'Library'});
});



app.listen(5090)