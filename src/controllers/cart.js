import Cart from "../models/cart.js";


export const addToCart = async (req,res)=>{
    try {
        const { userId, productId} = req.body;
        const cartItem = await Cart.findOne({ userId, productId})
        if(cartItem){
            cartItem.quantity += 1;
            await cartItem.save()
        }else{
            const { vendorId, productName, price, imageUrl} = req.body
            const cartItem = Cart.create({
                productId,
                userId,
                vendorId,
                productName,
                price,
                imageUrl
            })
            return res.status(201).json({
                message: "Product added to cart successfully!",
                cartItem,
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while adding to cart",
            error: error.message
        })
    }
}