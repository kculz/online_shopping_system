const express = require('express')
const router = express.Router()

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const freightController = require('../controllers/freightController')

    router.post('/add', verifyTokenAndAdmin, freightController.createFreight)
    router.put('/update/:id', verifyTokenAndAdmin, freightController.updateFreight )
    router.delete('/remove/:id', verifyTokenAndAdmin, freightController.removeFreight )
    router.get('/find/:id',verifyTokenAndAdmin, freightController.findFreight)
    router.get('/',verifyTokenAndAdmin, freightController.findAllFreights)

module.exports = router