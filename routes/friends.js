const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:index', ctrl.friends.renderFriendIndex)

router.post('/new/:index', ctrl.friends.addFriend)

router.put('/gifting/:index', ctrl.friends.giveGift)

module.exports = router;