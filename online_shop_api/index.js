const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT = process.env.PORT 
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/products')
const ecocashPaymentRoute = require('./routes/ecocash')
// const stripePaymentRoute = require('./routes/stripe')

// db connection string to mongo atlas
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
// app.use('/payments', stripePaymentRoute)
// app.use('/payments', ecocashPaymentRoute)

app.listen(process.env.PORT || PORT,()=> {
    console.log(`Port running on http://localhost:${PORT}`)
})