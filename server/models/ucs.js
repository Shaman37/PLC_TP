const mongoose = require('mongoose');
const users = require('./users');

const ucsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    school: String,
    semester: String,
    class: [{type: mongoose.Schema.Types.ObjectId,
              ref:'users'}]
    
});

module.exports = mongoose.model('ucs', ucsSchema);