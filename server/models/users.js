const mongoose = require('mongoose');
const ucs = require('./ucs');
const posts = require('./posts');

const usersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    mail: String,
    password: String
    // b_date: String,
    // biography: String,
    // course: String,
    // year: String,
    // ucs: [ucs.Schema._id],
    // feed: [posts.Schema._id],
    // friends: [usersSchema._id]
});

module.exports = mongoose.model('users', usersSchema);