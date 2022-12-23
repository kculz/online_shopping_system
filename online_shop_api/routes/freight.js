const express = require('express')
const router = express.Router()

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const freightController = require('../controllers/freightController')

    router.post('/add', verifyTokenAndAdmin, freightController.createCart)
    router.put('/update/:id', verifyTokenAndAdmin, freightController.updateCart )
    router.delete('/remove/:id', verifyTokenAndAdmin, freightController.removeCart )
    router.get('/find/:id',verifyTokenAndAdmin, freightController.findCart)
    router.get('/',verifyTokenAndAdmin, freightController.findAllCarts)

module.exports = router