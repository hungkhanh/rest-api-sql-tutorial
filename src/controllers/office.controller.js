const officeService = require('../services/office.service');

const getAllOffice = async(req, res) => {
  const page = req.query.page;
  const size = req.query.size;
  const response = await officeService.findAll(page, size);

  res.status(200).json({
    data: response,
  });
}

module.exports = {
  getAllOffice,
}