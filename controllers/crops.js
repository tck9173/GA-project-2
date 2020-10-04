const { renderIndex } = require('./users');

const Crops = require('../models').Crops;
const Users = require('../models').Users;

const renderCropIndex = (req,res) => {
    Crops.findAll()
    .then(allCrops =>{
        res.render('crops/index.ejs', {
            crop: allCrops
        })
    });
}

module.exports = {
    renderCropIndex
}