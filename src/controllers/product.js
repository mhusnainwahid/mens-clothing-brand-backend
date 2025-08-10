import Product from "../models/product.js";

export const createPro = async (req, res) => {
  try {
    const { productName, price, desc, vendorId,imageUrl } = req.body;
    const product = await Product.create({
      productName,
      price,
      desc,
      imageUrl,
      vendorId,
    });
    return res.status(200).json({
      message: "Product create successfully!",
      product
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating product!",
      error: error.message,
    });
  }
};

export const getAllPro = async (req, res) => {
  try {
    const product = await Product.find()
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting all product!",
      error: error.message,
    });
  }
};

export const getSomePro = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting all product!",
      error: error.message,
    });
  }
};

export const getPro = async (req, res) => {
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting a product!",
      error: error.message,
    });
  }
};


export const deletePro = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndDelete(productId);
    return res.status(200).json({
      message: "Product delete successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while deleting product!",
      error: error.message,
    });
  }
};

export const updatePro = async (req, res) => {
  try {
    const { productId } = req.params;
    const updateData = req.body
    const product = await Product.findByIdAndUpdate(productId,updateData,{
      new: true
    });
    return res.status(200).json({
      message: "Product update successfully!",
      product
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while updating product!",
      error: error.message,
    });
  }
};