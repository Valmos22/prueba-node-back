const Empleado = require('../models/empleado');

exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEmpleado = async (req, res) => {
  try {
    const { fecha_ingreso, nombre, salario } = req.body;
    const empleado = await Empleado.create({ fecha_ingreso, nombre, salario });
    res.status(201).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};