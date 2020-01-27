var express = require('express');
var router = express.Router();
var Group = require('../controllers/groups')
var Post = require('../controllers/posts')

const { verifyToken } = require('../middleware/check-auth')

/* GET group listing. */
router.get('/', verifyToken, function (req, res, next) {
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
router.get('/:groupId/admins', verifyToken, function (req, res, next) {
  Group.groupAdmins(req.params.groupId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET group members */
router.get('/:groupId/members', verifyToken, function (req, res, next) {
  Group.groupMembers(req.params.groupId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET group events */
router.get('/:groupId/events', verifyToken, function (req, res, next) {
  Group.groupEvents(req.params.groupId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET group feed */
router.get('/:groupId/feed', verifyToken, function (req, res, next) {
  Group.groupFeed(req.params.groupId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* POST group feed */
router.post('/:groupId/feed', function (req, res) {
  Post.insert(req.body)
    .then(data => Group.addToFeed(req.params.groupId,data._id)
                    .then(group => res.jsonp(data))
                    .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})

/* GET group info */
router.get('/:groupId', verifyToken, function (req, res, next) {
  Group.groupbyId(req.params.groupId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* POST groups */
router.post('/', function (req, res) {
  Group.insert(req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* PATCH event */
router.patch('/:idGroup', function (req, res) {
  Group.update(req.params.idGroup, req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE groups */
router.delete('/:idGroup', function (req, res) {
  Group.remove(req.params.idGroup)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

module.exports = router