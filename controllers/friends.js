const Crops = require('../models').Crops;
const Users = require('../models').Users;
const Friend = require('../models').Friend;

const addFriend = (req, res) => {
    req.body.relationship = 1;
    req.body.userId1 = req.params.index;
    Friend.create(req.body)
    .then(newFriend => {
        res.redirect(`/users/profile/${req.params.index}`)
    })     
}


module.exports = {
    addFriend
}