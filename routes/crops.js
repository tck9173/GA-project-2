const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.crops.renderCropIndex);
router.get('/new/:index', ctrl.crops.renderCropNew);
router.get('/:index', ctrl.crops.renderCropEdit);

router.post('/new/:index/:quality', ctrl.crops.createCrop);

router.put('/:index', ctrl.crops.editCropAction);

router.delete('/:index', ctrl.crops.deleteCrop);

module.exports = router;