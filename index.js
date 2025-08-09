import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { mongoDb } from './src/config/mongoDb.js'
import authRoutes from './src/routes/auth.js'
import productRoutes from './src/routes/product.js'
import generalRoutes from './src/routes/general.routes.js'
import cartRoutes from './src/routes/cart.js'

const app = express()
const PORT = process.env.PORT || 3030
dotenv.config()
mongoDb()
app.use(express.json())
app.use(cors())

app.use('/',authRoutes)
app.use('/',productRoutes)
app.use('/',generalRoutes)
app.use('/',cartRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`)
})