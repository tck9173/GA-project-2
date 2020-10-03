const Crops = require('../models').Crops;
const Users = require('../models').Users;

const renderIndex = (req, res) => {
    res.render('users/index.ejs')
}

const renderSignup = (req,res) => {
    res.render('users/signup.ejs')
}

const createUser = (req,res) => {
    Users.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`)
    })
}

module.exports = {
    renderIndex,
    renderSignup,
    createUser
}