const express = require('express');
const sequelize = require('./config/config');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configura CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:5173'  // Esto cambia depende del dominio donde este corriendo la app frontend
}));

app.use(express.json());
const PORT = process.env.PORT || 3000;

// Importa las rutas
const authRoutes = require('./routes/authRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const solicitudRoutes = require('./routes/solicitudRoutes');

// Usa las rutas
app.use('/api/auth', authRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/solicitudes', solicitudRoutes);

// Prueba la conexión a la base de datos y sincronizar los modelos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
    return sequelize.sync(); // Sincroniza los modelos con la base de datos
  })
  .then(() => {
    // Inicia el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => {
    console.error('No se pudo conectar a la base de datos:', error);
  });
