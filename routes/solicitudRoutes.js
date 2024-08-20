const express = require('express');
const { getSolicitudes, createSolicitud, deleteSolicitud } = require('../controllers/solicitudController');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');
const router = express.Router();

//-Descripción: Define las rutas para las operaciones relacionadas con solicitudes.
router.get('/', authenticateToken, getSolicitudes);
router.post('/', authenticateToken, authorizeRole('admin'), createSolicitud);
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteSolicitud);

module.exports = router;