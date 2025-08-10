import express from "express"
import { createPro, deletePro, getAllPro, getPro, getSomePro, updatePro } from "../controllers/product.js"

const productRoutes = express.Router()
productRoutes.post('/createpro',createPro)
productRoutes.get('/getallpro',getAllPro)
productRoutes.get('/getsomepro',getSomePro)
productRoutes.get('/getpro/:id',getPro)
productRoutes.delete('/deletepro/:productId',deletePro)
productRoutes.put('/updatepro/:productId',updatePro)

export default productRoutes