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

const renderCropNew = (req,res) => {
    res.render('crops/new.ejs')
}

const createCrop = (req,res) => {
    Crops.create(req.body)
    .then(newCrop => {
        res.redirect('/crops')
    })
}

module.exports = {
    renderCropIndex,
    renderCropNew,
    createCrop
}