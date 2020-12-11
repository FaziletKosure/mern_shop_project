const express = require('express')
const dotenv = require('dotenv')
const colors =require('colors')
const errorMiddleware= require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
dotenv.config()
const productRoutes=require('./routes/productRoutes')

connectDB()
const app = express()
app.get('/', (req,res)=>{
    res.send('API is running...')
})
// data db
app.use('/api/products',productRoutes)

app.use(errorMiddleware.notFound)
app.use(errorMiddleware.errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))