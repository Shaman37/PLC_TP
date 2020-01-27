const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    category: [String],
    text: String,
    photo: { type: String, required: false },
    file: { type: String, required: false },
    date: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }]
},
    {
        toJSON: { versionKey: false }
    });

module.exports = mongoose.model('posts', postsSchema);


