const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env.

// Crea una nueva instancia de Sequelize con los parámetros necesarios para conectar a la base de datos MySQL.
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

module.exports = sequelize;

// Descripción: Este archivo configura y exporta una instancia de Sequelize, que es un ORM para Node.js que facilita la interacción con bases de datos SQL.