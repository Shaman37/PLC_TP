var express = require('express');
var router = express.Router();
var User = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.list()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});


module.exports = router;
