import mongoose, { model, Schema, Types } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity:{
    type: Number
  },
  productName:{
    type: String
  },
  price:{
    type : Number
  },
  imageUrl:{
    type : String
  }

});

const Cart = model("Cart", cartSchema)
export default Cart