var User = require('../models/users')

module.exports.list = () => {
    return User
        .find()
        .exec()
}