const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Crea un modelo de Sequelize con los atributos especificados.

// Se define el modelo para la tabla de empleados en la base de datos.
// Se establece en true para que no sean campos obligatorios
const Empleado = sequelize.define('Empleado', {
  // DataTypes: Se utiliza para definir los tipos de datos de las columnas en la base de datos.
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  salario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
});

module.exports = Empleado;