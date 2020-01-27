const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: String,
    description: String,
    date: String,
    time: String,
    local: String,
    category: String,
    photo: [String],
    feed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }],
    uc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ucs',
        required: false
    }
},
    {
        toJSON: { versionKey: false }
    });

module.exports = mongoose.model('events', eventsSchema);