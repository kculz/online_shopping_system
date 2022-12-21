const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT = process.env.PORT 
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/products')

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('db connected')
})
.catch((err)=>{
    console.log('something went wrong!' + err)
})

app.use('/users',authRoute) 
app.use('/users',usersRoute)
app.use('/products',productRoute)

app.listen(process.env.PORT,()=> {
    console.log(`Port running on http://localhost:${PORT}`)
})