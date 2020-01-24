var Group = require('../models/groups')

module.exports.list = () => {
    return Group
        .find()
        .exec()
}

module.exports.listbyName = (name) => {
    return Group
        .find({name: {$regex: ".*" + name + ".*" }})
        .exec()
}

module.exports.groupbyId = (id) => {
    return Group
        .findOne({_id: id})
        .exec()
}

module.exports.groupAdmins = (id) => {
    return Group
        .findOne({_id: id},{ admin:1})
        .exec()
}

module.exports.groupMembers = (id) => {
    return Group
        .findOne({_id: id},{ members:1})
        .exec()
}

module.exports.groupEvents = (id) => {
    return Group
        .findOne({_id: id},{ events:1})
        .exec()
}

module.exports.groupFeed = (id) => {
    return Group
        .findOne({_id: id},{ feed:1})
        .exec()
}