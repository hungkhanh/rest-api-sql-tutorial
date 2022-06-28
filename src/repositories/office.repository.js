const db = require('../configs/database/mysql/models/index');

const Office = db.Office;

/**
 * 
 * @returns {Office[]}
 * @description query all office in database
 */
const findAll = async () => {
	// const offset = (page - 1) * size;
	// const response = await Office.findAndCountAll({
	// 	offset: offset,
	// 	limit: size,
	// });
	// console.log(response);
	// return {
	// 	totalRecords: response[0],
	// 	totalPages: Math.ceil(response[0] / size),
	// 	currentPage: page,
	// 	listOffice: response[1],
	// };

	return await Office.findAll({});
};

const create = async (officeData) => {
	const office = await Office.create(officeData);
	return office;
};

module.exports = {
	findAll,
	create,
};
