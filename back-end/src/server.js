const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

sequelize.sync({ force: false }) // Usa { force: false } para evitar que elimine las tablas al reiniciar (solo usa { force: true } en desarrollo)
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err);
  });

  module.exports = app;