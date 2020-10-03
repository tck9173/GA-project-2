const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.renderIndex);
router.get('/signup', ctrl.users.renderSignup);
router.get('/profile/:index', ctrl.users.renderProfile);
router.get('/login', ctrl.users.renderLogin);

router.post('/signup', ctrl.users.createUser);
router.post('/login', ctrl.users.loginAction);

router.delete('/profile/:index', ctrl.users.deleteUser);

module.exports = router;