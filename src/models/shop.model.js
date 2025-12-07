const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    shopname:{type:String, required: true, unique:true},
    phone:{type:String},
    password:{type:String, required:true},
    email:{type:String},

    address:[],
    
    rating:{type:Number},
    refreshToken:{type:String}

},{timestamps:true});

const shop = mongoose.model("shop", shopSchema);
module.exports = shop;