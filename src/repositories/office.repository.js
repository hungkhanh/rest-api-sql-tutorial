const db = require('../configs/database/mysql/models/index');

const Office = db.Office;

/**
 *
 * @returns {Office[]}
 * @description get all office
 */
const findAll = async () => {
	return await Office.findAll({});
};

/**
 *
 * @param {string} id
 * @returns {Office}
 * @description find by id
 */
const findById = async (id) => {
	return await Office.findByPk(id);
};

/**
 *
 * @param {Object} condition
 * @returns {Office}
 * @description find one by condition
 */
const findOne = async (condition) => {
	return await Office.findOne({
		where: condition,
	});
};

/**
 *
 * @param {Object} condition
 * @returns {Office[]}
 * @description find many by condition
 */
const findMany = async (condition) => {
	return await Office.findAll({
		where: condition,
	});
};

/**
 *
 * @param {Object} officeData
 * @returns {Office}
 * @description create instance of Office
 */
const create = async (officeData) => {
	return await Office.create(officeData);
};

/**
 *
 * @param {string} id
 * @param {Object} officeData
 * @returns {Office}
 * @description update instance Office by id
 */
const update = async (id, officeData) => {
	return await Office.update(officeData, {
		where: { id: id },
	});
};

/**
 *
 * @description soft-delete all instances in Office table
 */
const deleteAll = async () => {
	await Office.destroy({ truncate: true });
};

/**
 *
 * @param {string} id
 * @description soft-delete instance in Office table
 */
const deleteOne = async (id) => {
	await Office.destroy({
		where: { id: id },
	});
};

/**
 * 
 * @param {string} id
 * @description restore instance office
 */
const restore = async (id) => {
	await Office.restore({
		where: { id: id },
	});
};

module.exports = {
	findAll,
	findById,
	findOne,
	findMany,
	create,
	update,
	deleteAll,
	deleteOne,
	restore,
};
