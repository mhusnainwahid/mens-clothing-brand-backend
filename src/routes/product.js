import express from "express";
import {
  createPro,
  deletePro,
  getAllPro,
  getPro,
  getvendorPro,
  getSomePro,
  updatePro
} from "../controllers/product.js";

const productRoutes = express.Router();

productRoutes.post('/createpro', createPro);
productRoutes.get('/getallpro', getAllPro);
productRoutes.get('/getsomepro', getSomePro);
productRoutes.get('/getpro/:id', getPro);
productRoutes.get('/getvendorpro/:vendorId', getvendorPro);
productRoutes.delete('/deletepro/:productId', deletePro);
productRoutes.put('/updatepro/:productId', updatePro);

export default productRoutes;
