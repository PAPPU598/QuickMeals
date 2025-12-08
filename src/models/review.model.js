const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    content:{type:String},
    rating:{type:Number},

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    shop:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"shop"
    }

},{timestamps:true});

const review = mongoose.model("review", reviewSchema);
module.exports = review;