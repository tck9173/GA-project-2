const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.renderIndex);
router.get('/signup', ctrl.users.renderSignup);
router.get('/profile/:index', ctrl.users.renderProfile);

router.post('/signup', ctrl.users.createUser);

module.exports = router;