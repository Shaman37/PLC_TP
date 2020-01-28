var express = require('express');
var router = express.Router();
var Group = require('../controllers/groups')
var Post = require('../controllers/posts')
var Event = require('../controllers/events')

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
    .then(data => Group.addToFeed(req.params.groupId, data._id)
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


/* POST group event */
router.post('/:groupId/events', function (req, res) {
  Event.insert(req.body)
    .then(event =>

      Group.insertEvent(req.params.groupId, event._id)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
    )

    .catch(error => res.status(500).jsonp(error))
})


/* POST request group access */
router.post('/:groupId/pending', function (req, res) {
  Group.addPending(req.params.groupId, req.body.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


/* POST add group member */
router.post('/:groupId/members', function (req, res) {
  Group.addMember(req.params.groupId, req.body.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


/* PATCH event */
router.patch('/:idGroup', function (req, res) {
  Group.update(req.params.idGroup, req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE group */
router.delete('/:idGroup', function (req, res) {
  Group.groupbyId(req.params.idGroup)
    .then(group => {
      for (var i = 0; i < group.events.length; i++) {
        Event.eventFeed(group.events[i])
          .then(feed => {
            Post.removeMany(feed.feed.map(x => x._id))
          })
          .catch(error => res.status(500).jsonp(error))
        Event.remove(group.events[i])
      }
      Post.removeMany(group.feed)
      Group.remove(req.params.idGroup)
        .then(done => res.jsonp(done))
        .catch(error => res.status(500).jsonp(error))
    }

    )
    .catch(error => res.status(500).jsonp(error))
})


/* DELETE group post */
router.delete('/:idGroup/feed', function (req, res) {
  Group.removePost(req.params.idGroup, req.body.postId)
    .then(data => Post.remove(req.body.postId)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE group member */
router.delete('/:idGroup/members', function (req, res) {
  Group.removeMember(req.params.idGroup, req.body.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


/* DELETE group pending */
router.delete('/:idGroup/pending', function (req, res) {
  Group.removePending(req.params.idGroup, req.body.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})



/* DELETE group event */
router.delete('/:idGroup/events', function (req, res) {
  Group.removeEvent(req.params.idGroup, req.body.eventId)
    .then(event => Event.eventFeed(req.body.eventId)
      .then(feed => Post.removeMany(feed.feed.map(x => x._id))
        .then(posts => Event.remove(req.body.eventId)
          .then(data => res.jsonp(data))
          .catch(error => res.jsonp(error)))
        .catch(error => res.jsonp(error)))
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})


module.exports = router