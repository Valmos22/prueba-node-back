const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { Empleado } = require('../models/empleado'); // Suponiendo que tienes una tabla Empleado?
const { Empleado } = require('../models'); 
require('dotenv').config();

// Función para registrar un nuevo empleado, hash de la contraseña y guardar los datos en la base de datos.
exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await Empleado.create({ 
      username, 
      password: hashedPassword, 
      role, 
      // Estos valores pueden estar vacíos al registrar un usuario
      fecha_ingreso: null,
      nombre: null,
      salario: null
    });
    res.status(201).json({ message: 'Empleado registrado con éxito' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para iniciar sesión, verificar las credenciales del usuario, y generar un token JWT.
exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  const user = await Empleado.findOne({ where: { username } });
  if (!user) return res.status(404).json({ message: 'Empleado no encontrado' });

  // bcrypt - Utilizado para hash y verificar contraseñas.
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

  // Utilizado para generar y verificar tokens JWT para la autenticación.
  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET);
  const response = {
    status: 200,
    token,
    username,
    message: "Login con exito!"
  };

  res.json(response);
};