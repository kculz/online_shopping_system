const express = require('express')
const router = express.Router
const {verifyToken} = require('../middleware/verifyToken')
const ecocashPaymentController = require('../controllers/paymentsControllers/ecocash')


router.post('/ecocash',verifyToken, ecocashPaymentController.makePayment)

module.exports = router