var User = require('../models/users')

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

module.exports.userbyEmail = (email)  => {
    return User
        .findOne({email: email})
        .exec()
}

module.exports.insert = user => {
    return User.create(user)
}