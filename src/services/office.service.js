const officeRepository = require('../repositories/office.repository');
const MESSAGE = require('../common/constants/message.constant');
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
 * @description update instance Office by id if exists
 */
const update = async (id, officeData) => {
	const result = await officeRepository.findById(id);
	if (result) {
		return await officeRepository.update(id, officeData);
	} else {
		throw new Error(MESSAGE.NOT_FOUND);
	}
};

/**
 *
 * @param {string} id
 * @param {Object} officeData
 * @returns {Office}
 * @description update or create one instance Office
 */
const updateOrCreate = async (id, officeData) => {
	const result = await officeRepository.findById(id);

	if (!result) {
		return await officeRepository.create(officeData);
	} else {
		return await officeRepository.update(id, officeData);
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
 * @description restore one instance office
 */
const restoreOne = async (id) => {
	await officeRepository.restoreOne(id);
};

/**
 *
 * @description restore one instance office
 */
const restoreAll = async () => {
	await officeRepository.restoreAll();
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
	restoreOne,
	restoreAll,
};
