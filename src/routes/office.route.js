const router = require('express').Router();
const officeController = require('../controllers/office.controller');

router.get('/', officeController.getAllOffice);
router.get('/findOne', officeController.getOneOffice);
router.get('/findMany', officeController.getManyOffice);

module.exports = router;
