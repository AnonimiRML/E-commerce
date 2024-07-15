const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController.js');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware.js');

// Routes for orders
router.post('/', ordersController.createOrder);
router.get('/', authMiddleware, ordersController.getUserOrders);
router.get('/all', authMiddleware, adminMiddleware, ordersController.getAllOrders);

module.exports = router;
