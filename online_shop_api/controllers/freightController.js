const  Freight = require('../models/Freight')


// create Freight
const createFreight = async (req,res) => {
    const newFreight = new Freight(req.body)
    try {
        const savedFreight = await newFreight.save()
        res.status(201).json(savedFreight)
    } catch (error) {
        res.status(500).json(error)
    }
}

// update Freight
const updateFreight = async (req,res) => {
    try {
        const updatedFreight = await Freight.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new:true})
        res.status(200).json(updatedFreight)
    } catch (error) {
        res.status(500).json(error)
    }
}

// remove Freight
const removeFreight = async (req,res) => {
    try {
        await Freight.findByIdAndDelete(req.params.id)
        res.status(200).json("Freight deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
}

// get single Freight
const findFreight = async (req,res) => {
    try {
        const freight = await Freight.find({id: req.params.id })
        res.status(200).json(freight)
    } catch (error) {
        res.status(500).json(error)
    }
}
// Get all Freights
const findAllFreights = async (req,res) => {
    try {
        const freights = await Freight.find()
        res.status(200).json(freights)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    findAllFreights,
    findFreight,
    removeFreight,
    updateFreight,
    createFreight
}