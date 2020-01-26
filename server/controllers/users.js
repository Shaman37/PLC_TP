var User = require('../models/users')
var mongoose = require('mongoose')


module.exports.list = () => {
    return User
        .find()
        .exec()
}

module.exports.listbyName = (name)  => {
    return User
        .find({name: {$regex: ".*" + name + ".*"}})
        .exec()
}

module.exports.listbyCourse = (course)  => {
    return User
        .find({course: course})
        .exec()
}

module.exports.listbyNameCourse = (name,course)  => {
    return User
        .find({name: {$regex: ".*" + name + ".*"},course: course})
        .exec()
}

module.exports.userbyId = (id)  => {
    return User
        .findOne({_id: id})
        .exec()
}


module.exports.userFriends = (id) => {
    return User
        .findOne({_id: id }, {friends:1})
        .exec()
}

module.exports.userUcs = (id) => {
    return User
        .findOne({_id: id }, {ucs:1})
        .exec()
}


module.exports.userFeed = (id) => {
    return User
        .findOne({_id: id }, {feed:1})
        .exec()

}


module.exports.userbyEmail = (email)  => {
    return User
        .findOne({email: email})
        .exec()
}

module.exports.insert = user => {
    return User.create(user)
}


/*
module.exports.userPosts = (id) => {
    return User.aggregate([{$match: {_id: new mongoose.Types.ObjectId(id)}}, {$unwind: "$friends" },
                         {$lookup: {from: 'users', localField: 'friends', foreignField: '_id', as: 'posts' }},
                        {$unwind: "$posts"}])
}
*/