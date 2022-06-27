'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('office', 
    [
      {
        id: uuidv4(),
        city: 'city1',
        phone: '0123456789',
        addressLine1: 'address1',
        addressLine2: 'address2',
        state: 'state',
        country: 'country',
        postalCode: 'postalCode',
        territory: 'territory',
        createdBy: null,
        updatedBy: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        city: 'city2',
        phone: '0123456789',
        addressLine1: 'address1',
        addressLine2: 'address2',
        state: 'state',
        country: 'country',
        postalCode: 'postalCode',
        territory: 'territory',
        createdBy: null,
        updatedBy: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        city: 'city3',
        phone: '0123456789',
        addressLine1: 'address1',
        addressLine2: 'address2',
        state: 'state',
        country: 'country',
        postalCode: 'postalCode',
        territory: 'territory',
        createdBy: null,
        updatedBy: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);

    const officeRes = await queryInterface.sequelize.query(
      `SELECT * from office;`
    );
    // luôn có 2 ???
    console.log(officeRes[0]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('office', null, {});
  }
};
