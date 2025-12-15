const express = require('express');
const router = express.Router();
const jwtAuthMiddleware = require('../middlewares/jwtauth.middleware');

const {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    getProfile,
    changePassword,
    updateProfile,
    
} = require('../controllers/user.controller');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/logout',jwtAuthMiddleware, logoutUser);
router.post('/refresh-access-token', refreshAccessToken);
router.get('/get-profile', jwtAuthMiddleware, getProfile);
router.post('/change-password', jwtAuthMiddleware, changePassword);
router.patch('/update-profile', jwtAuthMiddleware, updateProfile);

module.exports = router