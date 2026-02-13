const express = require('express');
const router = express.Router();
const jwtAuthMiddleware = require('../middlewares/jwtauth.middleware');

const {
    addToCart,
    getCart,
    removeFromCart
} = require('../controllers/cart.controller')

router.put('/add-to-cart',jwtAuthMiddleware,addToCart)
router.get('/get-cart',jwtAuthMiddleware,getCart)
router.delete('/remove-from-cart/:itemId',jwtAuthMiddleware,removeFromCart)

module.exports = router