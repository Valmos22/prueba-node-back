const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Se define las rutas para la autenticación.
router.post('/register', register);
router.post('/login', login);

module.exports = router;