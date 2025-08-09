
import express from "express";
import multer from "multer";
import { storage } from "../config/cloudinary.js";
import { uploadImage } from "../controllers/general.controller.js";

const upload = multer({storage})

const generalRoutes = express.Router()

generalRoutes.post('/uploadimage',upload.single('image'),uploadImage)

export default generalRoutes