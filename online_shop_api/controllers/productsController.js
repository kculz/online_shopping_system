const Product = require('../models/Product')
const multer = require('multer')
// create product
//init products uploads storage file 
const Storage = multer.diskStorage({
    destination: "./uploads/products",
    filename: (req,res,cb) => {
        cb(null,  filename)
    }
})

const upload =  multer({
    storage: Storage
}).single('productImg')

const createProduct = async (req,res) => {
            const newProduct = new Product({
                title: req.body.title,
                desc: req.body.desc,
                img: {
                    data: req.body.img,
                    contentType: 'image/jpeg/png/jpg '
                },
                category: req.body.category,
                weight: req.body.weight,
                lenght: req.body.lenght,
                width: req.body.width,
                color: req.body.color,
                price: req.body.price,
            })
    try {
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
        console.log(savedProduct)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
}

// update Product
const updateProduct = async (req,res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true})
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}

// // remove Product
const removeProduct = async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
}

// // get single Product
const findProduct = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}
// get all Products 
const findAllProducts = async (req,res) => {
    // query to get new products
    const queryNew = req.query.new
    // query to get product by category
    const queryCategory = req.query.category

    try {
        let products
        if(queryNew){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        }else if(queryCategory){
            products = await Product.find({category: {$in: [queryCategory]}})
        }else{
            products = await Product.find()
        }

        res.status(200).json(products )
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = {
    createProduct,
    updateProduct,
    removeProduct,
    findProduct,
    findAllProducts
}