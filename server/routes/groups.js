var express = require('express');
var router = express.Router();
var Group = require('../controllers/groups')





/* GET group listing. */
router.get('/', function (req, res, next) {
    if (req.query.name) {
        Group.listbyName(req.query.name)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
    else {
        Group.list()
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error))
    }
})



  /* GET group admins */
  router.get('/:groupId/admins', function (req, res, next) {
    Group.groupAdmins(req.params.groupId)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  })

/* GET group members */
router.get('/:groupId/members', function (req, res, next) {
    Group.groupMembers(req.params.groupId)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  })

  /* GET group events */
  router.get('/:groupId/events', function (req, res, next) {
    Group.groupEvents(req.params.groupId)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  })

/* GET group feed */
router.get('/:groupId/feed', function (req, res, next) {
    Group.groupFeed(req.params.groupId)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  })


/* GET group info */
router.get('/:groupId', function (req, res, next) {
    Group.groupbyId(req.params.groupId)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  })

module.exports = router