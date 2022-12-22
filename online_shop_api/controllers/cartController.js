const Cart = require('../models/Cart')

// create Cart
const createCart = async (req,res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(201).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
}

// update Cart
const updateCart = async (req,res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true})
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
    }
}

// remove Cart
const removeCart = async (req,res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
}

// get user Cart
const findCart = async (req,res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId })
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
}
// Get Users Carts
const findAllCarts = async (req,res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
   
}