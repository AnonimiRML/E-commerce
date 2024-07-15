const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController.js');
const { authMiddleware } = require('../middlewares/authMiddleware.js');

// Routes for orders
router.post('/', ordersController.createOrder);
router.get('/', authMiddleware, ordersController.getOrders);

module.exports = router;
