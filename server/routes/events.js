var express = require('express');
var router = express.Router();

var Event = require('../controllers/events')

const { verifyToken } = require('../middleware/check-auth')


/* GET event listing. */
router.get('/', verifyToken, function (req, res, next) {
    if (req.query.name && req.query.category) {
        Event.listbyNameCat(req.query.name, req.query.category)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
    else if (req.query.category) {
        Event.listbyCategory(req.query.category)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
    else if (req.query.name) {
        Event.listbyName(req.query.name)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
    else {
        Event.list()
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
})

/* GET event info */
router.get('/:eventId', verifyToken, function (req, res, next) {
    Event.eventbyId(req.params.eventId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})


/* GET event  feed */
router.get('/:eventId/feed', verifyToken, function (req, res, next) {
    Event.eventFeed(req.params.eventId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* GET event author */
router.get('/:eventId/author', verifyToken, function (req, res, next) {
    Event.eventAuthor(req.params.eventId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})


/* GET event UC */
router.get('/:eventId/uc', verifyToken, function (req, res, next) {
    Event.eventUc(req.params.eventId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* POST events */
router.post('/', verifyToken, function (req, res) {
    Event.insert(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* PATCH event */
router.patch('/:idEvent', function (req, res) {
    Event.update(req.params.idEvent,req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  })

/* DELETE events */
router.delete('/:idEvent', verifyToken, function (req, res) {
    Event.remove(req.params.idEvent)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router