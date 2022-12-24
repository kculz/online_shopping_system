const express = require('express')
const {verifyToken ,verifyTokenAndAdmin, verifyTokenAndAuthorization} = require('../middleware/verifyToken')
const stripePaymentController = require('../controllers/paymentsControllers/stripe')
const router = express.Router()

router.post('/stripe',verifyToken,stripePaymentController.makeStripePayment)

module.exports = router