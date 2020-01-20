var express = require('express');
var router = express.Router();
var User = require('../controllers/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.query.name && req.query.course) {
    User.listbyNameCourse(req.query.name,req.query.course)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if(req.query.name){
    User.listbyName(req.query.name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if(req.query.course){
    User.listbyCourse(req.query.course)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else {
    User.list()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }

});

/* GET user info */
router.get('/:userId', function (req, res, next) {
  User.userbyId(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


module.exports = router;
