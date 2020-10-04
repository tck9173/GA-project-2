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

const renderCropEdit = (req,res) => {
    Crops.findByPk(req.params.index)
    .then(crop => {
        res.render('crops/edit.ejs', {
            crop: crop
        })    
    })
}

const editCropAction = (req,res) => {
    Crops.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(crop => {
        res.redirect('/crops')
    })
}

const deleteCrop = (req,res) => {
    Crops.destroy({
        where: {id: req.params.index}
    })
    .then(res.redirect('/crops/'));
}
module.exports = {
    renderCropIndex,
    renderCropNew,
    createCrop,
    renderCropEdit,
    editCropAction,
    deleteCrop
}