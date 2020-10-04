const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.crops.renderCropIndex);
router.get('/new', ctrl.crops.renderCropNew);

router.post('/new', ctrl.crops.createCrop);

module.exports = router;