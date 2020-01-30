var Chat = require('../models/chats')

module.exports.list = () => {
    return Chat
        .find()
        .exec()
}

module.exports.chatInfo = chatId => {
    return Chat
        .findOne({ _id: chatId })
        .exec()
}

module.exports.chatList = userId => {
    return Chat
        .find({ members: userId })
        .exec()
}


module.exports.chatInfo = chatId => {
    return Chat
        .findOne({ _id: chatId })
        .exec()
}

module.exports.chatMessages = chatId => {
    return Chat
        .findOne({ _id: chatId }, { messages: 1 })
        .populate({
            path: "messages", 
            populate: {
                path: "author",
                select: "name"
            }
        })
        .sort({ "$messages.date": 1 })
        .exec()
}

module.exports.insertMessage = (chatId, messageId) => {
    return Chat
        .findOneAndUpdate({ _id: chatId }, { $push: { messages: messageId } }, { new: true, useFindAndModify: false })
        .exec()
}


module.exports.insertMember = (chatId, userId) => {
    return Chat
        .findOneAndUpdate({ _id: chatId }, { $push: { members: userId } }, { new: true, useFindAndModify: false })
        .exec()
}


module.exports.insert = chat => {
    return Chat
        .create(chat)
}

