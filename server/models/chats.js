const mongoose = require('mongoose');

const chatsSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    }]

},
    {
        toJSON: { versionKey: false }
    });

module.exports = mongoose.model('chats', chatsSchema);