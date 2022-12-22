const express = require('express')
const router = express.Router()

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const cartController = require('../controllers/cartController')

    router.post('/add', verifyToken, cartController.createCart)
    router.put('/update/:id', verifyTokenAndAuthorization, cartController.updateCart )
    router.delete('/remove/:id', verifyTokenAndAuthorization, cartController.removeCart )
    router.get('/find/:id',verifyTokenAndAuthorization, cartController.findCart)
    router.get('/',verifyTokenAndAdmin, cartController.findAllCarts)

module.exports = router