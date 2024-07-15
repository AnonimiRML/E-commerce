const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/admin/usersController.js');
const { authMiddleware, adminMiddleware } = require('../../middlewares/authMiddleware.js');

router.use(authMiddleware); // Authenticate user for all routes in this router
router.use(adminMiddleware); // Restrict access to admins only

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
