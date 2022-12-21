const Product = require('../models/Product')


// create product

const createProduct = async (req,res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}


// update user
// const updateUser = async (req,res) => {
//     if(req.body.password){
//         req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET_KEY).toString()
//     }
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//             $set: req.body
//         },{new:true})
//         res.status(200).json(updatedUser)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

// // remove user
// const removeUser = async (req,res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id)
//         res.status(200).json("Users deleted...")
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

// // get single user
// const findUser = async (req,res) => {
//     try {
//         const user = await User.findById(req.params.id)
//         const {password, ...others} = user._doc
//         res.status(200).json(others)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }
// // get all users 
// const findAllUsers = async (req,res) => {
//     // query to get new users
//     const query = req.query.new
//     try {
//         const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find()
//         res.status(200).json(users)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

// // get users stats 
// const usersStats = async (req,res) => {
//     const date = new Date()
//     const lastYear = new Date(date.setFullYear(date.getFullYear() -1))

//     try {
//         const data = await User.aggregate([
//             {$match: {createdAt: {$gte: lastYear}}},
//             {
//                 $project: {
//                     month: {$month: "$createdAt"},
//                 },
//             },
//             { 
//                 $group: {_id: "$month", total: {$sum: 1}}
//             }
//         ])
//         res.status(200).json(data)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }
module.exports = {
    createProduct,
    // findAllUsers,
    // usersStats,
    // updateUser,
    // removeUser,
    // findUser
}