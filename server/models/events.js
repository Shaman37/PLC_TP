const mongoose = require('mongoose');
const users = require('./users');
const ucs = require('./ucs');
const posts = require('./posts');

const eventsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'},
    name: String,
    description: String,
    date: String,
    time: String,
    local: String,
    category: String,
    photo: [String],
    feed: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'}],
    uc: {type: mongoose.Schema.Types.ObjectId,
         ref: 'ucs',
         required: false}
});

module.exports = mongoose.model('events', eventsSchema);