const express = require('express');
const { getEmpleados, createEmpleado, deleteEmpleado } = require('../controllers/empleadoController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authenticateToken, getEmpleados);  // Ruta para obtener todos los empleados, protegida por autenticación
router.post('/', authenticateToken, createEmpleado); //  Ruta para crear un empleado, protegida por autenticación

module.exports = router;