const express = require('express');
const router = express.Router();
const jwtAuthMiddleware = require('../middlewares/jwtauth.middleware');

const {
    placeOrder,
    getAllOrders
} = require('../controllers/order.controller')

router.post('/place-order',jwtAuthMiddleware,placeOrder)
router.get('/get-orders',jwtAuthMiddleware,getAllOrders)

module.exports = router