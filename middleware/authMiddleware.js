const jwt = require('jsonwebtoken');
require('dotenv').config();

//Este archivo proporciona middleware para la autenticación y autorización.
// Verifica la validez del token JWT y lo agrega al objeto req si es válido.
const authenticateToken = (req, res, next) => {
  const authHeader  = req.headers['authorization'];

  if (!authHeader) return res.status(403).json({ error: 'Token no proporcionado' });
  const token = authHeader.split(' ')[1]; // El token debería ser la segunda parte del header

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('Error de verificación:', err); // Depura el error de verificación
      return res.status(403).json({ error: 'Token no válido' });
    }
    req.user = user;
    next();
  });
};

// Middleware que asegura que el usuario tenga el rol necesario para acceder a una ruta específica.
const authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) return res.sendStatus(403);
  next();
};

module.exports = { authenticateToken, authorizeRole };