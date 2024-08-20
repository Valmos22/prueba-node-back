const Sequelize = require('sequelize');
const sequelize = require('../config/config');

// Importar los modelos
const Empleado = require('./empleado');
const Solicitud = require('./solicitud');

// Asociaciones
// En este caso, `Solicitud` tiene una asociación de clave externa con `Empleado`.
Solicitud.belongsTo(Empleado, { foreignKey: 'id_empleado' });
Empleado.hasMany(Solicitud, { foreignKey: 'id_empleado' });

// Exporta los modelos
module.exports = { Empleado, Solicitud };