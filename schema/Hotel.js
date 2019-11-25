const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    city: String,
    address: String,
    stars: Number,

});

var HotelModel = mongoose.model("Hotels", hotelSchema);

module.exports = HotelModel;