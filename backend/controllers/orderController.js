const OrderModel = require('../models/orderModel');

// GET products API - /api/v1/orders
exports.createOrder = async (req, res, next) => {

    try {
        const cartItems = req.body;
        const amount = cartItems.reduce((acc, curr) => (acc + curr.product.price * curr.qty), 0);
        const status = 'pending'
        console.log('amount', amount)

        const order = await OrderModel.create({ cartItems, amount, status, })

        res.status(200).json({
            success: true,
            msg: 'post single order working',
            order
        })
    } catch (e) {
        res.status(404).json({
            success: false,
            msg: e.message
        })
    }

}