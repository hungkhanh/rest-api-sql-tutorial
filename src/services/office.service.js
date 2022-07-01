const officeRepository = require('../repositories/office.repository');

/**
 *
 * @return {Office[]}
 * @description find all office
 */
const findAll = async () => {
	return await officeRepository.findAll();
};

/**
 *
 * @param {string} id
 * @returns {Office}
 * @description find office by id
 */
const findById = async (id) => {
	return await officeRepository.findById(id);
};

/**
 *
 * @param {Object} condition
 * @returns {Office}
 * @description find one office by condition
 */
const findOne = async (condition) => {
	return await officeRepository.findOne(condition);
};

/**
 *
 * @param {Object} condition
 * @returns {Office[]}
 * @description find many office by condition
 */
const findMany = async (condition) => {
	return await officeRepository.findMany(condition);
};

/**
 *
 * @param {Oject} officeData
 * @returns {Office}
 * @description create instance of Office
 */
const create = async (officeData) => {
	return await officeRepository.create(officeData);
};

/**
 *
 * @param {string} id
 * @param {Object} officeData
 * @returns {Office}
 * @description update instance Office by id
 */
const update = async (id, officeData) => {
	return await officeRepository.update(id, officeData);
};

/**
 *
 * @param {string} id
 * @param {Object} officeData
 * @returns {Office}
 * @description update or create one instance Office
 */
const updateOrCreate = async (id, officeData) => {
	const result = await officeData.findById(id);

	if (!result) {
		return await officeData.create(officeData);
	} else {
		return await officeData.update(id, officeData);
	}
};

/**
 * @description soft-delete all instances in Office table
 */
const deleteAll = async () => {
	await officeRepository.deleteAll();
};

/**
 *
 * @param {string} id
 * @description soft-delete one instance in Office table
 */
const deleteOne = async (id) => {
	await officeRepository.deleteOne(id);
};

/**
 *
 * @param {string} id
 * @description restore instance office
 */
const restore = async (id) => {
	await officeRepository.restore(id);
};

module.exports = {
	findAll,
	findById,
	findOne,
	findMany,
	create,
	update,
	updateOrCreate,
	deleteAll,
	deleteOne,
	restore,
};
