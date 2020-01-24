var Uc = require('../models/ucs')

module.exports.list = () => {
    return Uc
        .find()
        .exec()
}

module.exports.listbyNameSchool = (name, school) => {
    return Uc
        .find({ name: name, school: school })
        .exec()
}

module.exports.listbySchool = (school) => {
    return Uc
        .find({ school: school })
        .exec()
}

module.exports.listbyName = (name) => {
    return Uc
        .find({name: {$regex: ".*" + name + ".*" }})
        .exec()
}

module.exports.ucById = (id) => {
    return Uc
        .findOne({ _id: id })
        .exec()
}


module.exports.ucClass = (id) => {
    return Uc
        .findOne({ _id: id },{class: 1})
        .exec()
}
