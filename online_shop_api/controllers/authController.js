const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const loginUser = async (req,res) => {
       const user = await User.findOne({email: req.body.email})
        !user && res.status(404).json('User not found')
        
        !req.body.password === user.password && res.status(401).json('Wrong password')
        
            const accessToken =  jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn: "3d"}
            )
            const {password, ...other} = user._doc
            res.status(200).json({user: other, accessToken})
            res.headers('x-auth', accessToken).send()
         }
    
const registerUser = async (req,res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
        console.log(savedUser)
    } catch (error) {
        res.status(401).json(error)
        console.log(error)
    }
}


module.exports = {
    loginUser,
    registerUser
}