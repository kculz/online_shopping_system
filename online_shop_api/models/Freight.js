const mongoose = require('mongoose')

const freightSchema = new mongoose.Schema({
    freight_type: {type: String, required: true, unique: true},
    freight_img: {type: String, required: true},
    weight_capacity: {type: Number},
    length_capacity: {type: Number},
    width_capacity: {type: Number},
},{timestamps:true})

module.exports = mongoose.model("Freight", freightSchema)