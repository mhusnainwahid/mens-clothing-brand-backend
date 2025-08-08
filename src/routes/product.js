import express from "express"
import { createPro, deletePro, getPro, updatePro } from "../controllers/product.js"

const productRoutes = express.Router()
productRoutes.post('/createpro',createPro)
productRoutes.get('/getpro',getPro)
productRoutes.delete('/deletepro/:productId',deletePro)
productRoutes.put('/updatepro/:productId',updatePro)

export default productRoutes