'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Genera contraseñas cifradas
    const hashedPassword1 = await bcrypt.hash('admin123', 10); // Contraseña para el primer administrador
    const hashedPassword2 = await bcrypt.hash('admin456', 10); // Contraseña para el segundo administrador

    // Inserta registros en la tabla administrador
    await queryInterface.bulkInsert('administrador', [
      {
        nombre: 'Juan',
        apellido: 'Pérez',
        tipo_documento_id: 1, // Asegúrate de que este ID exista en tipo_documento
        documento_identidad: '123456789',
        direccion: 'Calle 123, Ciudad',
        telefono: '3001234567',
        telefono_dos: null,
        sexo_id: 1, // Asegúrate de que este ID exista en sexo
        email: 'juan.perez@example.com',
        fecha_nacimiento: '1985-05-15',
        password: hashedPassword1, // Contraseña cifrada
        rol_id: 1, // Asegúrate de que este ID exista en rol
        estado_id: 1, // Asegúrate de que este ID exista en estado
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nombre: 'Ana',
        apellido: 'Gómez',
        tipo_documento_id: 2,
        documento_identidad: '987654321',
        direccion: 'Carrera 45, Ciudad',
        telefono: '3107654321',
        telefono_dos: '3209876543',
        sexo_id: 2,
        email: 'ana.gomez@example.com',
        fecha_nacimiento: '1990-08-20',
        password: hashedPassword2, // Contraseña cifrada
        rol_id: 2,
        estado_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Elimina los registros insertados si se revierte el seed
    await queryInterface.bulkDelete('administrador', null, {});
  },
};
