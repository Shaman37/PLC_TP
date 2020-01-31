var express = require('express');
var router = express.Router();

var Uc = require('../controllers/ucs')

const { verifyToken } = require('../middleware/check-auth')

/* GET uc listing. */
router.get('/', verifyToken, function (req, res, next) {
    if (req.query.name && req.query.school) {
        Uc.listbyNameSchool(req.query.name, req.query.school)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
    else if (req.query.school) {
        Uc.listbySchool(req.query.school)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
    else if (req.query.name) {
        Uc.listbyName(req.query.name)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
    else {
        Uc.list()
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
})

/* GET uc info */
router.get('/:ucId', verifyToken, function (req, res, next) {
    Uc.ucById(req.params.ucId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* GET students from uc */
router.get('/:ucId/class', verifyToken, function (req, res, next) {
    Uc.ucClass(req.params.ucId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* POST ucs */
router.post('/', verifyToken, function (req, res) {
    Uc.insert(req.body)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* PATCH uc */
router.patch('/:idUc', verifyToken, function (req, res) {
    Uc.update(req.params.idUc, req.body)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* DELETE ucs */
router.delete('/:idUc', verifyToken, function (req, res) {
    Uc.remove(req.params.idUc)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})


module.exports = router