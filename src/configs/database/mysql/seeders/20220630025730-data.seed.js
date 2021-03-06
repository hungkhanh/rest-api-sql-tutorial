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
      }
  ]);

    const officeRes = await queryInterface.sequelize.query(
      `SELECT * from office;`
    );

    console.log(officeRes[0]);

    await queryInterface.bulkInsert('employee',
      [
        {
          id: uuidv4(),
          lastName: 'last1',
          firstName: 'first',
          extension: 'extension',
          email: 'mail@gmail.com',
          officeId: officeRes[0][0].id,
          reportsTo: null,
          jobTitle: 'president',
          createdBy: null,
          updatedBy: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          lastName: 'last2',
          firstName: 'first',
          extension: 'extension',
          email: 'mail@gmail.com',
          officeId: officeRes[0][1].id,
          reportsTo: null,
          jobTitle: 'manager',
          createdBy: null,
          updatedBy: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employee', null, {});
    await queryInterface.bulkDelete('office', null, {});
  }
};
