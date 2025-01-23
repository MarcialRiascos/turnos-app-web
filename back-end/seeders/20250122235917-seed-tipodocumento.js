'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insertar roles en la tabla 'rol'
    await queryInterface.bulkInsert('tipo_documento', [
      {
        tipo_documento: 'CÉDULA DE CIUDADANÍA',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo_documento: 'CÉDULA DE CIUDADANÍA EXTRANJERA',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        tipo_documento: 'PASAPORTE',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Eliminar los roles de la tabla 'rol'
    await queryInterface.bulkDelete('tipo_documento', null, {});
  }
};
