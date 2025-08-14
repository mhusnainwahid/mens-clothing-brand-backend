import express from "express"
<<<<<<< HEAD
import { createPro, deletePro, getAllPro, getPro, getvendorPro, updatePro } from "../controllers/product.js"
=======
import { createPro, deletePro, getAllPro, getPro, getSomePro, updatePro } from "../controllers/product.js"
>>>>>>> d2d557d9f4d1e60a0dc401221e682737ecb55b16

const productRoutes = express.Router()
productRoutes.post('/createpro',createPro)
productRoutes.get('/getallpro',getAllPro)
productRoutes.get('/getsomepro',getSomePro)
productRoutes.get('/getpro/:id',getPro)
productRoutes.get('/getvendorpro/:vendorId', getvendorPro)
productRoutes.delete('/deletepro/:productId',deletePro)
productRoutes.put('/updatepro/:productId',updatePro)

export default productRoutes