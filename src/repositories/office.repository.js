const db = require('../configs/database/mysql/models/index');

const Office = db.Office;

const getAll = async (page, size) => {
	const offset = (page - 1) * size;
	const response = await Office.findAndCountAll({
		offset: offset,
		limit: size,
	});

	return {
		totalRecords: response[0],
		totalPages: Math.ceil(response[0] / size),
		currentPage: page,
		listOffice: response[1],
	};
};

const create = async (officeData) => {
	const office = await Office.create(officeData);
	return office;
};

module.exports = {
	getAll,
	create,
};
