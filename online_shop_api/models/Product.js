const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    
    title: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: Array},
    size: {type: String},
    weight: {type: String},
    lenght: {type: Number},
    width: {type: Number},
    color: {type: String},
    price: {type: String, required: true}

},{timestamps:true})

module.exports = mongoose.model("Product", productSchema)