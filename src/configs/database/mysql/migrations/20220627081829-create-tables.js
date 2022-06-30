'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		// Permission
		await queryInterface.createTable('permission', {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: Sequelize.INTEGER,
			},
			method: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			resource: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});

		// Role
		await queryInterface.createTable('role', {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});

		// Role_Permission
		await queryInterface.createTable('role_permission', {
			roleId: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			permissionId: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			active: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});

		// FK_RolePermission_Role
		await queryInterface.addConstraint('role_permission', {
			name: 'FK_RolePermission_Role',
			fields: ['roleId'],
			type: 'foreign key',
			references: {
				table: 'role',
				field: 'id',
			},
			onDelete: 'no action',
			onUpdate: 'no action',
		});

		// FK_RolePermission_Permission
		await queryInterface.addConstraint('role_permission', {
			name: 'FK_RolePermission_Permission',
			fields: ['permissionId'],
			type: 'foreign key',
			references: {
				table: 'permission',
				field: 'id',
			},
			onDelete: 'no action',
			onUpdate: 'no action',
		});

		// User
		await queryInterface.createTable('user', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
			},
			username: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			roleId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});

		// FK_User_Role
		await queryInterface.addConstraint('user', {
			name: 'FK_User_Role',
			fields: ['roleId'],
			type: 'foreign key',
			references: {
				table: 'role',
				field: 'id',
			},
			onDelete: 'no action',
			onUpdate: 'no action',
		});

		// Office
		await queryInterface.createTable('office', {
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
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});

		// Employee
		await queryInterface.createTable('employee', {
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
			userId: {
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
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});

		// FK_employee_user
		await queryInterface.addConstraint('employee', {
			name: 'FK_employee_user',
			fields: ['userId'],
			type: 'foreign key',
			references: {
				table: 'user',
				field: 'id',
			},
			onDelete: 'no action',
			onUpdate: 'no action',
		});

		// FK_employee_office
		await queryInterface.addConstraint('employee', {
			name: 'FK_employee_office',
			fields: ['officeId'],
			type: 'foreign key',
			references: {
				table: 'office',
				field: 'id',
			},
			onDelete: 'no action',
			onUpdate: 'no action',
		});

		// FK_employee_employee
		await queryInterface.addConstraint('employee', {
			name: 'FK_employee_employee',
			fields: ['reportsTo'],
			type: 'foreign key',
			references: {
				table: 'employee',
				field: 'id',
			},
			onDelete: 'no action',
			onUpdate: 'no action',
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('role_permission');
		await queryInterface.dropTable('employee');
		await queryInterface.dropTable('user');
		await queryInterface.dropTable('role');
		await queryInterface.dropTable('permission');
		
		await queryInterface.dropTable('office');
	},
};
