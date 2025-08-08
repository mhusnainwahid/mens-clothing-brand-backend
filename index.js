import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { mongoDb } from './src/config/mongoDb.js'
import authRoutes from './src/routes/auth.js'
import productRoutes from './src/routes/product.js'

const app = express()
const PORT = process.env.PORT || 3030
dotenv.config()
mongoDb()
app.use(express.json())
app.use(cors())

app.use('/',authRoutes)
app.use('/',productRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`)
})