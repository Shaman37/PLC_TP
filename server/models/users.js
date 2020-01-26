const mongoose = require('mongoose');
const ucs = require('./ucs');
const posts = require('./posts');

const usersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    pending:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' 
    }]
});

module.exports = mongoose.model('users', usersSchema);