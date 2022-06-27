'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Office
    await queryInterface.createTable('office', 
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        city: {
          type: Sequelize.STRING,
        },
        phone: {
          type: Sequelize.STRING,
        },
        addressLine1: {
          type: Sequelize.STRING,
        },
        addressLine2: {
          type: Sequelize.STRING,
        },
        state: {
          type: Sequelize.STRING,
        },
        country: {
          type: Sequelize.STRING,
        },
        postalCode: {
          type: Sequelize.STRING,
        },
        territory: {
          type: Sequelize.STRING,
        },
        createdBy: {
          type: Sequelize.UUID,
        },
        updatedBy: {
          type: Sequelize.UUID,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    )

    // Employee
    await queryInterface.createTable('employee', 
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        lastName: {
          type: Sequelize.STRING,
        },
        firstName: {
          type: Sequelize.STRING,
        },
        extension: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        officeId: {
          type: Sequelize.UUID,
        },
        reportsTo: {
          type: Sequelize.UUID,
        },
        jobTitle: {
          type: Sequelize.STRING,
        },
        createdBy: {
          type: Sequelize.UUID,
        },
        updatedBy: {
          type: Sequelize.UUID,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    )

    await queryInterface.addConstraint('employee',
      {
        name: 'FK_employee_office',
        fields: ['officeId'],
        type: 'foreign key',
        references: {
          table: 'office',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('employee');
    await queryInterface.dropTable('office');
    
  }
};
