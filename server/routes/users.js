var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
var mongoose = require('mongoose')
var User = require('../controllers/users')
var Group = require('../controllers/groups')
var Post = require('../controllers/posts')

const { verifyToken } = require('../middleware/check-auth')

const privateKey = fs.readFileSync('./keys/private.key', 'utf8')


/* GET users listing. */
router.get('/', verifyToken, function (req, res, next) {
  if (req.query.name && req.query.course) {
    User.listbyNameCourse(req.query.name, req.query.course)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if (req.query.name) {
    User.listbyName(req.query.name)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if (req.query.course) {
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


// POST Login
router.post('/login', (req, res) => {
  User.userbyEmail(req.body.email)
    .then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
          if (err) {
            res.status(401).send({ status: "Authentication failed" })
          } else {
            if (isMatch) {

              jwt.sign({
                id: user._id
              },
                privateKey, { expiresIn: '1h', algorithm: 'RS256' }, (err, token) => {
                  res.status(200).jsonp({ status: "OK LOGGED", token })
                })

            } else {
              res.status(401).send({ status: "Authentication failed" })
            }
          }

        })
      } else {
        res.status(401).send({ status: "Authentication failed" })
      }
    })
    .catch(err => res.send({ status: "ERROR" }))
});


// POST user
router.post('/', (req, res) => {
  const { name, email, password, b_date, biography, course, year, ucs, feed, friends } = req.body

  User.userbyEmail(email)
    .then(resp => {
      if (resp) {
        res.status(401).jsonp({ status: "Email already in use" })
      } else {
        let user = {
          name,
          email,
          password,
          b_date,
          biography,
          course,
          year,
          ucs,
          feed,
          friends
        }
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash
            user.b_date = ''
            user.biography = ''
            user.course = ''
            user.year = ''
            user.ucs = []
            user.feed = []
            user.friends = []

            User.insert(user)
              .then(() => {
                res.status(200).jsonp({ status: "OK" })
              })
              .catch(err => {
                res.status(500).jsonp({ status: "User not registered" });
              })
          })
        })
      }
    })
    .catch(err => {
      res.status(500).jsonp({ status: "ERROR BD" })
    })
});

/* GET user info */
router.get('/:userId', verifyToken, function (req, res, next) {
  User.userbyId(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET user friends */
router.get('/:userId/friends', verifyToken, function (req, res, next) {
  User.userFriends(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET user Ucs */
router.get('/:userId/ucs', verifyToken, function (req, res, next) {
  User.userUcs(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET user feed */
router.get('/:userId/feed', verifyToken, function (req, res, next) {
  User.userFeed(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET user available posts */
router.get('/:userId/posts', function (req, res, next) {
  var userPosts = { _id: "", feed: [] }
  User.friendsPosts(req.params.userId)
    .then(posts => User.userFeed(req.params.userId)
      .then(data => {

        userPosts._id = posts[0]._id
        userPosts.feed = posts[0].feed.concat(data.feed)

        userPosts.feed.sort(function (p1, p2) {
          return new Date(p1.date) - new Date(p2.date);
        })
        res.jsonp(userPosts)
      })
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})


/* GET user groups feed */
router.get('/:userId/groups/feed', function (req, res, next) {
  Group.userGroupsFeed(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})



/* GET user groups */
router.get('/:userId/groups', function (req, res, next) {
  Group.userGroups(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* PATCH user */
router.patch('/:idUser', function (req, res) {
  User.update(req.params.idUser, req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* POST user friend request */
router.post('/:idUser/request', function (req, res) {
  User.request(req.params.idUser, req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


/* POST user accept friend request */
router.post('/:idUser/friends', function (req, res) {
  User.friendAccept(req.params.idUser, req.body._id)
    .then(data => User.friends(req.body._id, req.params.idUser)
      .then(user => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE user */
router.delete('/:idUser', function (req, res) {
  User.remove(req.params.idUser)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE user post */
router.delete('/:idUser/feed', function (req, res) {
  User.removePost(req.params.idUser, req.body.postId)
    .then(data => Post.remove(req.body.postId)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})


module.exports = router;
