'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insertar roles en la tabla 'rol'
    await queryInterface.bulkInsert('estado', [
      {
        estado: 'ACTIVO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        estado: 'INACTIVO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        estado: 'PENDIENTE',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        estado: 'PROCESANDO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        estado: 'CUMPLIDO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        estado: 'CANCELADO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        estado: 'EXPIRADO',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Eliminar los roles de la tabla 'rol'
    await queryInterface.bulkDelete('estado', null, {});
  }
};
