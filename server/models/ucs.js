const mongoose = require('mongoose');

const ucsSchema = new mongoose.Schema({
    name: String,
    school: String,
    semester: String,
    class: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }]

},
    {
        toJSON: { versionKey: false }
    });

module.exports = mongoose.model('ucs', ucsSchema);