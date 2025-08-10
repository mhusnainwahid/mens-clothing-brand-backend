import CheckoutOrder from "../models/checkoutOrder.js"

export const checkoutOrderSchema = async (req, res) => {
  try {
    const { shippingData, paymentData, subtotal, shipping, tax, grandTotal, cartItems } = req.body;

    const checkoutOrder = await CheckoutOrder.create({
      userId: req.user?._id, // if you have authentication
      productName: cartItems.map(item => item.name).join(", "), // or store array instead
      price: subtotal,
      subTotal: subtotal,
      total: grandTotal,
      shipping,
      tax,
      name: `${shippingData.firstName} ${shippingData.lastName}`,
      email: shippingData.email,
      address: shippingData.address,
      city: shippingData.city,
      cardNumber: paymentData.cardNumber
    });

    res.status(200).json({
      message: "Order confirmed",
      checkoutOrder
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while placing the order!",
      error: error.message
    });
  }
};
