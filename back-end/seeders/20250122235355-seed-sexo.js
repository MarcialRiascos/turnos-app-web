'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insertar roles en la tabla 'rol'
    await queryInterface.bulkInsert('sexo', [
      {
        sexo: 'MASCULINO',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        sexo: 'FEMENINO',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Eliminar los roles de la tabla 'rol'
    await queryInterface.bulkDelete('sexo', null, {});
  }
};
