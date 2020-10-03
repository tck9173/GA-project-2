const Crops = require('../models').Crops;
const Users = require('../models').Users;

const renderIndex = (req, res) => {
    res.render('users/index.ejs')
}

const renderSignup = (req,res) => {
    res.render('users/signup.ejs')
}

const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const createUser = (req,res) => {
    Users.create(req.body)
    .then(newUser => {
        res.redirect(`users/profile/${newUser.id}`)
    })
}

const renderProfile = (req,res) => {
    Users.findByPk(req.params.index)
    .then(foundUser => {
        res.render('users/profile.ejs', {
            user: foundUser
        })
    })
}
module.exports = {
    renderIndex,
    renderSignup,
    createUser,
    renderProfile,
    renderLogin
}