const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    price:{type:Number, required:[true,"price is required"]},
    status:{
        type:String,
        enum:["pending","done"],
        default:"pending"
    },
    method:{type:String},
    transactionId:{type:String}

},{timestamps:true});

const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;