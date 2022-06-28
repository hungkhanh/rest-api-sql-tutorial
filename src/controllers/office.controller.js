const officeService = require('../services/office.service');

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @description list office response
 */
const getAllOffice = async (req, res) => {
	// const page = req.query.page;
	// const size = req.query.size;
	const response = await officeService.findAll();

	res.status(200).json({
		data: response,
	});
};

module.exports = {
	getAllOffice,
};
