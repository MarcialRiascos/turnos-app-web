'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insertar roles en la tabla 'rol'
    await queryInterface.bulkInsert('rol', [
      {
        rol: 'ADMIN_SUPER',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        rol: 'ADMIN_REGISTRADOR',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Eliminar los roles de la tabla 'rol'
    await queryInterface.bulkDelete('rol', null, {});
  }
};
