const officeService = require('../services/office.service');

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
 * @description create one office
 */
const create = async (req, res) => {
	const data = req.body;
	const response = await officeService.create(data);
	res.status(201).json({
		data: response,
	});
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description update office if exists
 */
const updatePatch = async (req, res) => {
	const id = req.query.id;
	const data = req.body;
	await officeService.update(id, data);
	res.status(200).json({
		message: 'Success',
	});
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @description update or create office
 */
const updatePut = async (req, res) => {
	const id = req.query.id;
	const data = req.body;
	await officeService.updateOrCreate(id, data);
	res.status(200).json({
		data: 'Success',
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
};

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
	await officeService.restoreOne(id);
	res.status(200).json({
		message: 'Success',
	});
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description restore all instance Office
 */
 const restoreAllOffice = async (req, res) => {
	await officeService.restoreAll();
	res.status(200).json({
		message: 'Success',
	});
};

module.exports = {
	getAllOffice,
	getOneOffice,
	getManyOffice,
	create,
	updatePatch,
	updatePut,
	deleteAllOffice,
	deleteOneOffice,
	restoreOneOffice,
	restoreAllOffice,
};
