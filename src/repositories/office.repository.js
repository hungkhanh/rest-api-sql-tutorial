const db = require('../configs/database/mysql/models/index');
const { v4: uuidv4 } = require('uuid');
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
	const office = Office.build(officeData);
	office.id = uuidv4();
	office.createdBy = null;
	office.updatedBy = null;
	office.createdAt = new Date();
	office.updatedAt = new Date();
	return await office.save();
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
 * @description restore one instance office
 */
const restoreOne = async (id) => {
	await Office.restore({
		where: { id: id },
	});
};

/**
 * 
 * @description restore all instance office
 */
 const restoreAll = async () => {
	await Office.restore();
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
	restoreOne,
	restoreAll,
};
