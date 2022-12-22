const express = require('express')
const router = express.Router()

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const productsController = require('../controllers/productsController')

    router.post('/add', verifyTokenAndAdmin, productsController.createProduct)
    router.put('/update/:id', verifyTokenAndAdmin, productsController.updateProduct )
    router.delete('/remove/:id', verifyTokenAndAdmin, productsController.removeProduct )
    router.get('/find/:id', productsController.findProduct)
    router.get('/', productsController.findAllProducts)

module.exports = router