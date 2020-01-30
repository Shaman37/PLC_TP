var User = require('../models/users')
var mongoose = require('mongoose')

module.exports.list = () => {
    return User
        .find({}, { password: 0, pending: 0 })
        .exec()
}

module.exports.listbyName = (name) => {
    return User
        .find({ name: { $regex: ".*" + name + ".*" } })
        .exec()
}

module.exports.listbyCourse = (course) => {
    return User
        .find({ course: course })
        .exec()
}

module.exports.listbyNameCourse = (name, course) => {
    return User
        .find({ name: { $regex: ".*" + name + ".*" }, course: course })
        .exec()
}

module.exports.userbyId = (id) => {
    return User
        .findOne({ _id: id })
        .exec()
}


module.exports.userFriends = (id) => {
    return User
        .findOne({ _id: id }, { friends: 1 })
        .populate({
            path: 'friends',
            select: 'name'
        })
        .exec()
}

module.exports.userUcs = (id) => {
    return User
        .findOne({ _id: id }, { ucs: 1 })
        .exec()
}


module.exports.userFeed = (id) => {
    return User
        .findOne({ _id: id }, { feed: 1 })
        .populate({
            path: 'feed',
            populate: { path: 'author', select: 'name' }

        })
        .exec()

}

module.exports.userEvents = (id) => {
    return User
        .findOne({ _id: id }, { events: 1 })
        .populate("events")
        .exec()

}


module.exports.userbyEmail = (email) => {
    return User
        .findOne({ email: email })
        .exec()
}

module.exports.insert = user => {
    return User.create(user)
}

module.exports.update = (id, data) => {
    return User
        .findOneAndUpdate({ _id: id }, data, { new: true, useFindAndModify: false })
        .exec()
}


module.exports.friendsPosts = (id) => {
    return User.aggregate([{ $match: { _id: new mongoose.Types.ObjectId(id) } },
    { $lookup: { from: 'users', localField: 'friends', foreignField: '_id', as: 'posts' } },
    { $lookup: { from: 'posts', localField: 'posts.feed', foreignField: '_id', as: 'posts' } },
    { $unwind: "$posts" },
    { $lookup: { from: 'users', localField: 'posts.author', foreignField: '_id', as: 'posts.author' } },
    { $group: { _id: "$_id", feed: { $push: "$posts" } } }])


}


module.exports.fp = (id) => {
    return User.findOne({ _id: id }, { name: 1 })
        .populate({
            path: 'friends',
            populate: {
                path: 'feed', populate: {
                    path: 'author', select: 'name'
                }
            },
            select: 'name'
        })
        .populate({ path: 'feed', populate: { path: 'author', select: 'name' } })
        .exec()


}

module.exports.addToFeed = (id_user, id_post) => {
    return User
        .findOneAndUpdate({ _id: id_user }, { $push: { feed: id_post } }, { new: true, useFindAndModify: false })
        .exec()
}


module.exports.createEvent = (id_user, id_event) => {
    return User
        .findOneAndUpdate({ _id: id_user }, { $push: { events: id_event } }, { new: true, useFindAndModify: false })
        .exec()
}


module.exports.request = (id_user, id_request) => {
    return User
        .findOneAndUpdate({ _id: id_user }, { $addToSet: { pending: id_request } }, { new: true, useFindAndModify: false })
}

module.exports.RemoveRequest = (id_user, id_request) => {
    return User
        .findOneAndUpdate({ _id: id_user }, { $pull: { pending: id_request } }, { new: true, useFindAndModify: false })
}

module.exports.friendAccept = (id_user, id_request) => {
    return User
        .findOneAndUpdate({ _id: id_user }, { $pull: { pending: id_request }, $addToSet: { friends: id_request } }, { new: true, useFindAndModify: false })
}

module.exports.friends = (id_user, id_request) => {
    return User
        .findOneAndUpdate({ _id: id_user }, { $addToSet: { friends: id_request } }, { new: true, useFindAndModify: false })
}

module.exports.friendDelete = (id_user, id_request) => {
    return User
        .findOneAndUpdate({ _id: id_user }, { $pull: { friends: id_request } }, { new: true, useFindAndModify: false })
}

module.exports.remove = id => {
    return User
        .deleteOne({ _id: id })
        .exec()
}

module.exports.removePost = (userId, postId) => {
    return User
        .findOneAndUpdate({ _id: userId }, { $pull: { feed: postId } }, { new: true, useFindAndModify: false })
        .exec()
}

module.exports.removeEvent = (userId, eventId) => {
    return User
        .findOneAndUpdate({ _id: userId }, { $pull: { events: eventId } }, { new: true, useFindAndModify: false })
        .exec()
}
