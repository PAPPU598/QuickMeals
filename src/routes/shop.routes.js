const express = require('express');
const router = express.Router();

const {
    searchShopbyName
} = require('../controllers/shop.controller')

router.get('/search-shop/:shopNameForSearching',searchShopbyName)

module.exports = router