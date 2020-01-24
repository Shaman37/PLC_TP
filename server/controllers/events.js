var Event = require('../models/events')

module.exports.list = () => {
    return Event
        .find()
        .exec()
}

module.exports.listbyCategory = (category) => {
    return Event
        .aggregate([{ $unwind: "$category" }, { $match: { category: category } }])
        .sort({ date: 1 })
        .exec()
}

module.exports.listbyName = (name) => {
    return Event
        .find({name: {$regex: ".*" + name + ".*" }})
        .exec()
}

module.exports.listbyNameCat = (name, category) => {
    return Event
        .find({ name: name, category: category })
        .exec()
}

module.exports.eventbyId = (id) => {
    return Event
        .findOne({ _id: id })
        .exec()
}

module.exports.eventUc = (id) => {
    return Event
        .findOne({ _id: id }, { _id: 1 })
        .populate("uc")
        .exec()
}

module.exports.eventAuthor = (id) => {
    return Event
        .findOne({ _id: id }, { _id: 1 })
        .populate("author")
        .exec()
}

module.exports.eventFeed = (id) => {
    return Event
        .findOne({ _id: id },{feed: 1})
        .exec()
}