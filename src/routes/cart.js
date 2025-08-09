

import express from  "express"
import { addToCart, getCartItems } from "../controllers/cart.js"
const cartRoutes = express.Router()

cartRoutes.post('/addtocart',addToCart)
cartRoutes.get('/getcartitems/:userId',getCartItems)

export default cartRoutes