const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware.js');

// Public routes
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);

// Admin routes
router.post('/', authMiddleware, adminMiddleware, productsController.addProduct);
router.put('/:id', authMiddleware, adminMiddleware, productsController.updateProduct);
router.delete('/:id', authMiddleware, adminMiddleware, productsController.deleteProduct);

module.exports = router;
