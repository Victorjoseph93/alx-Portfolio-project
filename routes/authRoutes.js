// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration
router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

// Route for password recovery
router.post('/recover-password', authController.recoverPassword);

// Route for token verification (protected route example)
router.get('/verify-token', authMiddleware.verifyToken, authController.verifyToken);

module.exports = router;
