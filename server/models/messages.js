const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    content: String,
    date: String

},

    {
        toJSON: { versionKey: false }
    });

module.exports = mongoose.model('messages', messagesSchema);