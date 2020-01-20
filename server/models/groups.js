const mongoose = require('mongoose');
const users = require('./users');
const events = require('./events');
const posts = require('./posts');

const groupsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    admin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'}],
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'}],
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'events'}],
    feed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'}]
});

module.exports = mongoose.model('groups', groupsSchema);