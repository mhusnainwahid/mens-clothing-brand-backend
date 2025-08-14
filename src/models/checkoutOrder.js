import mongoose, { model, Schema} from "mongoose";
const checkoutOrderSchema = new Schema({
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      productName:{
        type: String
      },
      price:{
        type : Number
      },
      subTotal:{
        type: Number
      },
      total:{
        type: Number
      },
      shipping:{
        type: Number
      },
      tax:{
        type: Number
      },
      name:{
        type: String
      },
      email:{
        type:String
      },
      address:{
        type: String
      },
      city:{
        type: String
      },
      cardNumber:{
        type: String
      },

})

const CheckoutOrder = model("CheckoutOrder",checkoutOrderSchema)
export default CheckoutOrder