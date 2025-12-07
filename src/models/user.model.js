const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone:{type:String, required: true, unique: true},
    password:{type:String, required:true},
    email:{type:String},
    username:{type:String},

    address:[],
    
    refreshToken:{type:String}

},{timestamps:true});

const user = mongoose.model("user", userSchema);
module.exports = user;