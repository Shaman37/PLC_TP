const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    b_date: String,
    biography: String,
    course: String,
    year: String,
    ucs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ucs'
    }],
    feed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'events'
    }],
    pending:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' 
    }]
},
{
    toJSON: { versionKey: false }
});

module.exports = mongoose.model('users', usersSchema);