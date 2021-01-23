//accessing mongoose package
const mongoose = require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.sf5ov.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

//schema definition
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    name: String,
    email: String,
    password: String  
});
//model definition
var Usersdata = mongoose.model('usersdata',UsersSchema);
module.exports = Usersdata;