var express = require('express');
var router = express.Router();

var Event = require('../controllers/events')

const { verifyToken } = require('../middleware/check-auth')


/* GET post listing. */
router.get('/', verifyToken ,function (req, res, next) {
    if (req.query.name && req.query.category){
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