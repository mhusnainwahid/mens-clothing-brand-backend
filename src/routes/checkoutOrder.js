import express from 'express'
import { checkoutOrderSchema } from '../controllers/checkoutOrder.js'

const checkoutOrderRoutes = express.Router()

checkoutOrderRoutes.post('/checkout',checkoutOrderSchema)

export default checkoutOrderRoutes