const mongoose = require('mongoose');
const users = require('users');
const events = require('events');
const posts = require('posts');

const groupsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    admin: [users.Schema._id],
    members: [users.Schema._id],
    events: [events.Schema._id],
    feed: [posts.Schema._id]
});

module.exports = mongoose.model('groups', groupsSchema);