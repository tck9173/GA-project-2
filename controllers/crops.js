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
    Users.findByPk(req.params.index)
    .then(foundUser => {
        res.render('crops/new.ejs', {
            user: foundUser
        })
    })
}

const createCrop = (req,res) => {
    req.body.userId = req.params.index;
    Crops.create(req.body)
    .then(newCrop => {
        res.redirect('/crops')
    })
}

const renderCropEdit = (req,res) => {
    Crops.findByPk(req.params.index, {
        include: [Users]
    })
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