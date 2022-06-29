const { response } = require('express');
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

module.exports = {
	getAllOffice,
	getOneOffice,
	getManyOffice,
};
