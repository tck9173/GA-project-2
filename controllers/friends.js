const Crops = require('../models').Crops;
const Users = require('../models').Users;
const Friend = require('../models').Friend;

const renderFriendIndex = (req,res)=> {
    Users.findByPk(req.params.index, {
        include: [
            {
            model: Crops,
            attributes: ['id', 'name']
            },
            {
                model:Users,
                as: "Friends",
                attributes: ['name', 'id']
            }
        ]
    })
    .then(foundUser => {
        res.render('friends/index.ejs', {
            user:foundUser
        })  
    })
}


const addFriend = (req, res) => {
    req.body.userId = req.body.userId2
    Crops.update(req.body, {
        where: {id:req.body['crop.id']},
        returning: true
    })
    .then(updatedCrop => {
        req.body.relationship = 1;
        req.body.userId1 = req.params.index;
        Friend.create(req.body)
        .then(newFriend => {
            res.redirect(`/users/profile/${req.params.index}`)
        })    
    })
         
}

const giveGift = (req, res) => {
    req.body.userId = req.body.userId2
    Crops.findOne({
        where: {id:req.body['crop.id']}
    })
    .then(foundCrop => {
        Crops.update(req.body, {
            where: {id:req.body['crop.id']},
            returning: true
        })
        .then(updatedCrop => {
            req.body.userId1 = req.params.index;
            Friend.findOne({
                where: {
                    userId1: req.params.index,
                    userId2: req.body.userId2
                }
            })
            .then(foundRelationship => {
                if (foundCrop.quality === 'low') {
                    req.body.relationship = foundRelationship.relationship + 1;
                } else if (foundCrop.quality === 'medium') {
                    req.body.relationship = foundRelationship.relationship + 2;
                } else if (foundCrop.quality === 'high') {
                    req.body.relationship = foundRelationship.relationship + 3;
                }
                Friend.update(req.body, {
                    where: { 
                        userId1: req.params.index,
                        userId2: req.body.userId2
                    },
                    returning: true,
                })
                .then(updatedFriend => {
                    res.redirect(`/users/profile/${req.params.index}`)
                })    
            })
                
        })
    })
    
}

module.exports = {
    addFriend,
    renderFriendIndex,
    giveGift
}