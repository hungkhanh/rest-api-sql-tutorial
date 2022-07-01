const officeService = require('../services/office.service');
const MESSAGE = require('../common/constants/message.constant');

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description list office response
 */
const getAllOffice = async (req, res) => {
	const response = await officeService.findAll();
	res.status(200).json({
		data: response,
	});
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description get one office by condition
 */
const getOneOffice = async (req, res) => {
	const condition = req.query;
	const response = await officeService.findOne(condition);
	res.status(200).json({
		data: response,
	});
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description get many office by condition
 */
const getManyOffice = async (req, res) => {
	const condition = req.query;
	const response = await officeService.findMany(condition);
	res.status(200).json({
		data: response,
	});
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const deleteAllOffice = async (req, res) => {
	await officeService.deleteAll();
	res.status(200).json({
		message: 'Success',
	});
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @description soft-delete one instance Office
 */
const deleteOneOffice = async (req, res) => {
	const id = req.query.id;
	await officeService.deleteOne(id);
	res.status(200).json({
		message: 'Success',
	});
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @description restore one instance Office
 */
const restoreOneOffice = async (req, res) => {
	const id = req.query.id;
	await officeService.restore(id);
	res.status(200).json({
		message: 'Success',
	});
}

module.exports = {
	getAllOffice,
	getOneOffice,
	getManyOffice,
	deleteAllOffice,
	deleteOneOffice,
	restoreOneOffice,
};
