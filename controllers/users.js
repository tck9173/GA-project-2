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
        res.redirect(`/users/profile/${newUser.id}`)
    })
}

const loginAction = (req,res) => {
    Users.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`);
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

const editProfile = (req,res) => {
    Users.update(req.body, {
        where: {id: req.params.index},
        returning: true,
    })
    .then(user => {
        res.redirect(`/users/profile/${req.params.index}`);
    })
}

const deleteUser = (req,res) => {
    Users.destroy({
        where: {id: req.params.index}
    })
    .then(res.redirect('/users/'));
}

module.exports = {
    renderIndex,
    renderSignup,
    createUser,
    renderProfile,
    renderLogin,
    loginAction,
    deleteUser,
    editProfile
}