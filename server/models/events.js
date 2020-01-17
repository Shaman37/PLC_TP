const mongoose = require('mongoose');
const users = require('users');
const ucs = require('ucs');
const posts = require('posts');

const eventsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: users.Schema._id,
    name: String,
    description: String,
    date: String,
    time: String,
    local: String,
    category: String,
    photo: [String],
    feed: [posts.Schema._id],
    uc: {type: ucs.Schema._id, required: false}
});

module.exports = mongoose.model('events', eventsSchema);