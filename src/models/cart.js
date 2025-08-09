import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  quantity:{
    type: Number
  },
  TotalPrice:{
    type : Number
  }

});
