const express = require('express')
const router = express.Router()

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const ordersController = require('../controllers/ordersController')

    router.post('/add', verifyToken, ordersController.createOrder)
    router.put('/update/:id', verifyTokenAndAdmin, ordersController.updateOrder )
    router.delete('/remove/:id', verifyTokenAndAdmin, ordersController.removeOrder )
    router.get('/find/:id',verifyTokenAndAuthorization, ordersController.findOrder)
    router.get('/',verifyTokenAndAdmin, ordersController.findAllOrders)
    router.get('/income',verifyTokenAndAdmin, ordersController.findMonthlyIncome)

module.exports = router