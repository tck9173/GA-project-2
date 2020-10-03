const Crops = require('../models').Crops;
const Users = require('../models').Users;

const renderIndex = (req, res) => {
    res.render('users/index.ejs')
}

module.exports = {
    renderIndex
}