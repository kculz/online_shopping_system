const express = require('express')
const router = express.Router()

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const productsController = require('../controllers/productsController')

    router.post('add', verifyTokenAndAdmin, productsController.createProduct)
//     router.put('/update/:id', verifyTokenAndAuthorization, productsController.updateUser )
//     router.delete('/remove/:id', verifyTokenAndAuthorization, productsController.removeUser )
//     router.get('/find/:id',verifyTokenAndAdmin, productsController.findUser)
//     router.get('/',verifyTokenAndAdmin, productsController.findAllUsers)
//     router.get('/stats',verifyTokenAndAdmin, productsController.usersStats)

module.exports = router