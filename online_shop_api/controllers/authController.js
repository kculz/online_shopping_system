const User = require('../models/User.js')
const CryptoJS = require("crypto-js")
const jwt = require('jsonwebtoken')

const registerUser = async (req,res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET_KEY).toString(),
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
        console.log(savedUser)
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email,password: req.body.password})
        if(user){
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTOJS_SECRET_KEY)
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        if(OriginalPassword !== req.body.password){
            res.status(401).json("Wrong Credentials")
        }else{
            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECRET_KEY
            
            )
            const {password, ...other} = user._doc
            res.status(200).json({other, accessToken})
        }
        
        }else{
            res.status(401).json("Wrong Credentials")
        }
        
    } catch (error) {
        
    } 
}

module.exports = {
    registerUser,
    loginUser
}