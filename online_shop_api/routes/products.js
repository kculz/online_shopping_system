const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const productsController = require('../controllers/productsController')

const storage = multer.diskStorage({
    destination: "uploads",
        filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname( file.originalname))
    }
})
const upload = multer({storage: storage})


router.post('/add', upload.single("img"), async (req,res) => {
            const newProduct = new Product({
                title: req.body.title,
                desc: req.body.desc,
                img: {
                    data: fs.readFileSync("uploads/" + req.file.filename),
                    contentType: "image/png"
                },
                category: req.body.category,
                weight: req.body.weight,
                length: req.body.length,
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
})


    router.put('/update/:id', productsController.updateProduct )
    router.delete('/remove/:id', productsController.removeProduct )
    router.get('/:id', productsController.findProduct)
    router.get('/', productsController.findAllProducts)

module.exports = router