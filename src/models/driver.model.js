const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    phone:{type:String, required: true, unique: true},
    password:{type:String, required:true},
    email:{type:String},
    name:{type:String},

    savings:{type:Number},
    
    refreshToken:{type:String}

},{timestamps:true});

const driver = mongoose.model("user", driverSchema);
module.exports = driver;