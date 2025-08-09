import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema({
    productName:{
        type : String
    },
    price:{
        type: Number
    },
    desc:{
        type: String
    },
    vendorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Product = model('Product',productSchema)
export default Product