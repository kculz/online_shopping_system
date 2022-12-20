const express = require('express')
const router = express.Router()


router.get('/',(req,res) => {
    res.send('home')
    console.log('home')
})

module.exports = router