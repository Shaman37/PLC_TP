const mongoose = require('mongoose');
const user = require('./users');

const postsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'},
    category: [String],
    text: String, 
    photo: {type: String, required: false},
    file: {type: String, required: false},
    date: String
});

postsSchema.add({comments: [postsSchema]})

module.exports = mongoose.model('posts', postsSchema);