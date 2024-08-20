const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Empleado = require('../models/empleado');

// Se define el modelo para la tabla de solicitudes y establece una relación de clave foránea con el modelo de empleados.
const Solicitud = sequelize.define('Solicitud', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  resumen: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

Solicitud.belongsTo(Empleado, { foreignKey: 'id_empleado' });

module.exports = Solicitud;