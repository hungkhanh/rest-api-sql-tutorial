'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('role', [
			{
				title: 'president',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: 'manager',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: 'leader',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: 'staff',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: 'customer',
				description: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);

		await queryInterface.bulkInsert('permission', [
      {
        method: 'GET',
        resource: 'office',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'POST',
        resource: 'office',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'PUT',
        resource: 'office',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'PATCH',
        resource: 'office',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'DELETE',
        resource: 'office',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'GET',
        resource: 'employee',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'POST',
        resource: 'employee',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'PUT',
        resource: 'employee',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'PATCH',
        resource: 'employee',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        method: 'DELETE',
        resource: 'employee',
        description: null,
        createdAt: new Date(),
				updatedAt: new Date(),
      }
    ]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('role', null, {});
    await queryInterface.bulkDelete('permission', null, {});
	},
};
