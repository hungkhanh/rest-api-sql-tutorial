const db = require('../configs/database/mysql/models/index');

const Employee = db.Employee;

const getAll = async (page, size) => {
	const offset = (page - 1) * size;
	const response = await Employee.findAndCountAll({
		offset: offset,
		limit: size,
	});

	return {
		totalRecords: response[0],
		totalPages: Math.ceil(response[0] / size),
		currentPage: page,
		listEmployee: response[1],
	};
};

const create = async (employeeData) => {
	const employee = await Employee.create(employeeData);
	return employee;
};

module.exports = {
	getAll,
	create,
};
