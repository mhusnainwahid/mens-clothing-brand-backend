

import express from  "express"
import { addToCart, deleteCartItems, getCartItems } from "../controllers/cart.js"
const cartRoutes = express.Router()

cartRoutes.post('/addtocart',addToCart)
cartRoutes.get('/getcartitems/:userId',getCartItems)
cartRoutes.delete('/deletecartitems/:productId',deleteCartItems)

export default cartRoutes