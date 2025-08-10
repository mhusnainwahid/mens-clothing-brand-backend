import CheckoutOrder from "../models/checkoutOrder.js"

export const checkoutOrderSchema = async (req,res) =>{
    try {
        const checkoutOrder = await CheckoutOrder(req.body)
        return res.status(200).json({
            message:" Order confirmed",
            checkoutOrder
        })
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while order!",
            error: error.message
        })
    }
}