const express = require('express');
const router = express.Router();
const adminPreferenceController = require('../controllers/adminPreferenceController.js');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware.js');

// Routes for admin preferences
router.get('/', adminPreferenceController.getPreferences);
router.put('/', authMiddleware, adminMiddleware, adminPreferenceController.updatePreferences);

module.exports = router;
