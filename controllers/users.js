const Crops = require('../models').Crops;
const Users = require('../models').Users;

const renderIndex = (req, res) => {
    res.render('users/index.ejs')
}

const renderSignup = (req,res) => {
    res.render('users/signup.ejs')
}

module.exports = {
    renderIndex,
    renderSignup
}