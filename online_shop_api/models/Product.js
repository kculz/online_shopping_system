const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    
    title: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {data: Buffer,contentType: String},
    category: {type: Array},
    weight: {type: String},
    lenght: {type: Number},
    width: {type: Number},
    color: {type: String},
    price: {type: Number, required: true}

},{timestamps:true})

module.exports = mongoose.model("Product", productSchema)