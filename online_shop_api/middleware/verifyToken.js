 const jwt = require('jsonwebtoken')

 const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            err && res.status(403).json("Invalid token")
            req.user = user
            next( )
        })
    }else{
        return res.status(401).json("Not authenticated!")
    }
 }

 const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req, res, ()=> {
        if(req.user.id === req.params.id || req.user.isAdmin){
             next()
        }else{
            res.status(403).json("You are restricted to perform this action!")
        }
    })
 }

 const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req, res, ()=> {
        if(req.user.isAdmin){
             next()
        }else{
            res.status(403).json("You are restricted to perform this action!")
        }
    })
 }
 module.exports = {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization
 }