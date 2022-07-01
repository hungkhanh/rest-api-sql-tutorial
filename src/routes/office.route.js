const router = require('express').Router();
const officeController = require('../controllers/office.controller');

router.get('/all', officeController.getAllOffice);
router.get('/one', officeController.getOneOffice);
router.get('/many', officeController.getManyOffice);

router.delete('/all', officeController.deleteAllOffice);
router.delete('/one', officeController.deleteOneOffice);

router.put('/one', officeController.restoreOneOffice);

module.exports = router;
