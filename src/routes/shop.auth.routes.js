const express = require('express');
const router = express.Router();
const jwtAuthMiddleware = require('../middlewares/jwtauth.middleware');

const {
    registerShop,
    loginShop,
    logoutShop,
    refreshAccessToken,
    getProfile,
    changePassword,
    updateProfile,
} = require('../controllers/shop.auth.controller')

router.post('/register',registerShop);
router.post('/login',loginShop);
router.post('/logout',jwtAuthMiddleware, logoutShop);
router.post('/refresh-access-token', refreshAccessToken);
router.get('/get-profile', jwtAuthMiddleware, getProfile);
router.post('/change-password', jwtAuthMiddleware, changePassword);
router.patch('/update-profile', jwtAuthMiddleware, updateProfile);

module.exports = router