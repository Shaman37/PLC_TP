const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: String,
    start: String,
    end: String,
    time: String,
    local: String,
    color: String,
    category: String,
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