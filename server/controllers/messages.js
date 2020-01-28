var Message = require('../models/messages')


module.exports.insert = message => {
    message.date = new Date().toISOString()
    return Message
        .create(message)
}


