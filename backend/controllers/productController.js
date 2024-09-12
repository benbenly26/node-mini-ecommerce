const ProductModel = require('../models/productModel')

// GET products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    try {
        const product = await ProductModel.find({})
        res.status(200).json({
            success: true,
            msg: 'Success for all products are shown',
            product,
        })
    } catch (e) {
        res.status(404).json({
            success: false,
            msg: e.message
        })
    }
}
// GET products API - /api/v1/products/:id
exports.getSingleProducts = async (req, res, next) => {
    try {
        const productId = await ProductModel.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: 'Single product has been shown',
            productId
        })
    } catch (e) {
        res.status(404).json({
            success: false,
            msg: e.message,
        })
    }
}