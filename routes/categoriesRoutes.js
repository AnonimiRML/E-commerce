const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController.js');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware.js');

// Public routes
router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getCategoryById);

// Admin routes
router.post('/', authMiddleware, adminMiddleware, categoriesController.addCategory);
router.put('/:id', authMiddleware, adminMiddleware, categoriesController.updateCategory);
router.delete('/:id', authMiddleware, adminMiddleware, categoriesController.deleteCategory);

module.exports = router;
