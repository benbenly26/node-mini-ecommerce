const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
    created_at: Date,
})

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel