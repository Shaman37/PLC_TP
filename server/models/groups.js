const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
    name: String,
    description: String,
    admin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'events'
    }],
    feed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }],
    pending: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }]
},
    {
        toJSON: { versionKey: false }
    });

module.exports = mongoose.model('groups', groupsSchema);