var Group = require('../models/groups')

module.exports.list = () => {
    return Group
        .find()
        .exec()
}

module.exports.listbyName = (name) => {
    return Group
        .find({ name: { $regex: ".*" + name + ".*" } })
        .exec()
}

module.exports.groupbyId = (id) => {
    return Group
        .findOne({ _id: id })
        .exec()
}

module.exports.groupAdmins = (id) => {
    return Group
        .findOne({ _id: id }, { admin: 1 })
        .exec()
}

module.exports.groupMembers = (id) => {
    return Group
        .findOne({ _id: id }, { members: 1 })
        .exec()
}

module.exports.groupEvents = (id) => {
    return Group
        .findOne({ _id: id }, { events: 1 })
        .exec()
}

module.exports.groupFeed = (id) => {
    return Group
        .findOne({ _id: id }, { feed: 1 })
        .exec()
}

module.exports.insert = group => {
    return Group.create(group)
}

module.exports.insertEvent = (id, eventId) => {
    return Group
        .findOneAndUpdate({ _id: id }, { $push: { events: eventId } }, { new: true, useFindAndModify: false })
        .exec()
}

module.exports.update = (id, data) => {
    return Group
        .findOneAndUpdate({ _id: id }, data, { new: true, useFindAndModify: false })
        .exec()
}

module.exports.addToFeed = (id_group, id_post) => {
    return Group
        .findOneAndUpdate({ _id: id_group }, { $push: { feed: id_post } }, { new: true, useFindAndModify: false })
        .exec()
}


module.exports.addPending = (id_group, id_user) => {
    return Group
        .findOneAndUpdate({ _id: id_group }, { $push: { pending: id_user } }, { new: true, useFindAndModify: false })
        .exec()
}

module.exports.addMember = (id_group, id_user) => {
    return Group
        .findOneAndUpdate({ _id: id_group }, { $pull: { pending: id_user }, $push: { members: id_user } }, { new: true, useFindAndModify: false })
        .exec()
}


module.exports.groupMembers = (id) => {
    return Group
        .findOne({ _id: id }, { members: 1 })
        .exec()
}




module.exports.userGroups = (userId) => {
    return Group
        .find({ members: userId , admin: userId})
        .populate({path: 'members', select: 'name' })
        .populate({path: 'feed', populate:{ path: 'author', select: 'name'} , populate: {path:'comments' , populate: { path: 'author' , select: 'name'}}} )
        .populate({path: 'events', populate:{ path: 'author', select: 'name'}} )
        .populate({path: 'pending', select: 'name' })
        .populate({path: 'admin', select: 'name' })
        .exec()
}


module.exports.remove = id => {
    return Group
        .deleteOne({ _id: id })
        .exec()
}


module.exports.removePost = (id, postId) => {
    return Group
        .findOneAndUpdate({ _id: id }, { $pull: { feed: postId } }, { new: true, useFindAndModify: false })
        .exec()
}

module.exports.removeEvent = (id, eventId) => {
    return Group
        .findOneAndUpdate({ _id: id }, { $pull: { events: eventId } }, { new: true, useFindAndModify: false })
        .exec()
}

module.exports.removeMember = (id, userId) => {
    return Group
        .findOneAndUpdate({ _id: id }, { $pull: { members: userId } }, { new: true, useFindAndModify: false })
        .exec()
}

module.exports.removePending = (id, userId) => {
    return Group
        .findOneAndUpdate({ _id: id }, { $pull: { pending: userId } }, { new: true, useFindAndModify: false })
        .exec()
}