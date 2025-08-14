import Cart from "../models/cart.js";


export const addToCart = async (req,res)=>{
    try {
        const { userId, productId} = req.body;
        const cartItem = await Cart.findOne({ userId, productId})
        if(cartItem){
            cartItem.quantity += 1;
            await cartItem.save()
        }else{
            const { vendorId, productName, price, imageUrl, quantity} = req.body
            const cartItem = await Cart.create({
                productId,
                userId,
                vendorId,
                productName,
                price,
                imageUrl,
                quantity,
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

export const getCartItems =async (req,res) =>{
    try {
        const {userId} = req.params
        const cartItems = await Cart.find({userId})
        return res.status(200).json({
            message: "Cart items fetched successfully!",
            cartItems,
        })
    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while fetching cart items!",
            error: error.message
        })
    }
}
export const deleteCartItems = async (req, res) => {
    try {
        const { productId } = req.params;

        const deletedItem = await Cart.findOneAndDelete({ productId });

        if (!deletedItem) {
            return res.status(404).json({ message: "Cart item not found!" });
        }

        return res.status(200).json({
            message: "Cart item deleted successfully!"
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while deleting cart item!",
            error: error.message
        });
    }
};
