const router = require('express').Router();
const officeController = require('../controllers/office.controller');

router.get('/all', officeController.getAllOffice);
router.get('/one', officeController.getOneOffice);
router.get('/many', officeController.getManyOffice);

router.post('/', officeController.create);
router.patch('/update', officeController.updatePatch);
router.put('/update', officeController.updatePut);

router.delete('/all', officeController.deleteAllOffice);
router.delete('/one', officeController.deleteOneOffice);

router.put('/restore/one', officeController.restoreOneOffice);
router.put('/restore/all', officeController.restoreAllOffice);

module.exports = router;
