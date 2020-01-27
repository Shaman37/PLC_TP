var Post = require('../models/posts')

module.exports.list = () => {
    return Post
        .find()
        .sort({ date: 1 })
        .exec()
}

module.exports.listbyCategory = (category) => {
    return Post
        .aggregate([{ $unwind: "$category" }, { $match: { category: category } }])
        .sort({ date: 1 })
        .exec()
}

module.exports.listbyAuthor = (author) => {
    return Post
        .aggregate([{ $lookup: { from: 'users', localField: 'author', foreignField: '_id', as: 'author' } },
        { $unwind: "$author" },
        { $match: { "author.name": author } }])
        .sort({ date: 1 })
        .exec()

}

module.exports.listbyAuthorCat = (author, category) => {
    return Post
        .aggregate([{ $unwind: "$category" },
        { $match: { category: category } },
        { $lookup: { from: 'users', localField: 'author', foreignField: '_id', as: 'author' } },
        { $unwind: "$author" },
        { $match: { "author.name": author } }, { $addFields: { author: "$author._id" } }])
        .sort({ date: 1 })
        .exec()
}


module.exports.postbyId = (id) => {
    return Post
        .findOne({ _id: id })
        .exec()
}


module.exports.postAuthor = (id) => {
    return Post
        .findOne({ _id: id }, { _id: 1 })
        .populate("author")
        .exec()
}

module.exports.postComments = (id) => {
    return Post
        .findOne({ _id: id }, { comments: 1 })
        .exec()
}

module.exports.insert = post => {
    post.date = new Date().toISOString()
    return Post.create(post)
}

module.exports.update = (id, data) => {
    return Post
        .findOneAndUpdate({ _id: id }, data, { new: true, useFindAndModify: false })
        .exec()
}

module.exports.remove = id => {
    return Post
        .deleteOne({_id: id})
        .exec()
}

module.exports.removeMany = feed => {
    return Post
        .deleteMany({_id: {$in: feed}})
        .exec()
}