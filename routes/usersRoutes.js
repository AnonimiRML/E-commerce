const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');
const { authMiddleware } = require('../middlewares/authMiddleware.js');

router.use(authMiddleware); // Authenticate user for all routes in this router

// Get current user's profile
router.get('/profile', usersController.getProfile);

// Update current user's profile
router.put('/profile', usersController.updateProfile);

// Additional user-related routes can be added here
// For example: change password, delete account, etc.

module.exports = router;
