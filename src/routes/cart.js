

import express from  "express"
import { addToCart } from "../controllers/cart.js"
const cartRoutes = express.Router()

cartRoutes.post('/addtocart',addToCart)

export default cartRoutes