const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street:{type:String,required:true},
    landmark:{type:String},
    pin:{type:String,required:true},

    district:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true}
});

const address = mongoose.model("address", addressSchema);
module.exports = address;