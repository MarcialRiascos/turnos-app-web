'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('servicio', [
      {
        servicio: 'CANCHA #1',
        descripcion: 'CANCHA DE FUTBOL 6',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        servicio: 'CANCHA #2',
        descripcion: 'CANCHA DE FUTBOL 6',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        servicio: 'CANCHA #3',
        descripcion: 'CANCHA DE FUTBOL 6',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        servicio: 'CANCHA #4',
        descripcion: 'CANCHA DE FUTBOL 7',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('servicio', null, {});
  },
};
