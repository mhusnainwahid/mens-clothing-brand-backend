import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { mongoDb } from './src/config/mongoDb.js'
import authRoutes from './src/routes/auth.js'
import productRoutes from './src/routes/product.js'
import generalRoutes from './src/routes/general.routes.js'
import cartRoutes from './src/routes/cart.js'
import contactRoutes from './src/routes/contact.js'
import checkoutOrderRoutes from './src/routes/checkoutOrder.js'

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
app.use('/', contactRoutes)
app.use('/', checkoutOrderRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`)
})