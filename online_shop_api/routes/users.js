const express = require('express')
const router = express.Router()

const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken')
const usersController = require('../controllers/usersController')
const { route } = require('./auth')

    router.put('/update/:id', verifyTokenAndAuthorization, usersController.updateUser )
    router.delete('/remove/:id', verifyTokenAndAuthorization, usersController.removeUser )
    router.get('/find/:id',verifyTokenAndAdmin, usersController.findUser)
    router.get('/',verifyTokenAndAdmin, usersController.findAllUsers)
    router.get('/stats',verifyTokenAndAdmin, usersController.usersStats)

module.exports = router