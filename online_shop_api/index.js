const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT 
const usersRoute = require('./routes/users')
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('db connected')
})
.catch((err)=>{
    console.log('something went wrong!' + err)
})

app.use('/users',usersRoute)

app.listen(process.env.PORT,()=> {
    console.log(`Port running on http://localhost:${PORT}`)
})