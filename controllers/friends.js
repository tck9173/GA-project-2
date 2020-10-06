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
    console.log('here1')
    Crops.update(req.body, {
        where: {id:req.body['crop.id']},
        returning: true
    })
    .then(updatedCrop => {
        console.log('here2')
        req.body.userId1 = req.params.index;
        Friend.findOne({
            where: {
                userId1: req.params.index,
                userId2: req.body.userId2
            }
            //add user id 2 constraint
        })
        //need to find specific relationship
        //where: userId1 = req.params.index
        .then(foundRelationship => {
            console.log(foundRelationship.relationship)
            console.log(req.body)
            req.body.relationship = foundRelationship.relationship + 1;
            Friend.update(req.body, {
                where: { 
                    userId1: req.params.index,
                    userId2: req.body.userId2
                },
                returning: true,
            })
            .then(updatedFriend => {
                console.log('here3')
                console.log(req.params.index)
                res.redirect(`/users/profile/${req.params.index}`)
            })    
        })
            
    })
}

module.exports = {
    addFriend,
    renderFriendIndex,
    giveGift
}