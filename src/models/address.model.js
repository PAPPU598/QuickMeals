const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street:{type:String},
    landmark:{type:String},
    pin:{type:String},

    district:{type:String},
    state:{type:String},
    country:{type:String}
});

const address = mongoose.model("user", addressSchema);
module.exports = address;