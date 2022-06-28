const router = require('express').Router();
const officeController = require('../controllers/office.controller');

router.get('/', officeController.getAllOffice);

module.exports = router;
