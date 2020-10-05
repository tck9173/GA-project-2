const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/new/:index', ctrl.friends.addFriend)

module.exports = router;