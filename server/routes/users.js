var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
var User = require('../controllers/users')
var Group = require('../controllers/groups')
var Post = require('../controllers/posts')
var Event = require('../controllers/events')
var Visitor = require('../grammar/visitor')
var Chat = require('../controllers/chats')
var rimraf = require('rimraf')
var path = require('path')

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

              const uid = user._id
              jwt.sign({
                id: user._id
              },
                privateKey, { expiresIn: '1h', algorithm: 'RS256' }, (err, token) => {
                  res.status(200).jsonp({ status: "OK LOGGED", token, uid })
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

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  if (!fs.existsSync('data/tmp/'))
    fs.mkdirSync('data/tmp/', (err) => {
      if (err) throw err;
    })

  req.files.file.mv('data/tmp/' + req.files.file.name, function (err) {
    if (err)
      return res.status(500).send(err);
  })


  Visitor.parseDocument('data/tmp/', req.files.file.name, async (usersList) => {

    var exit = 0
    var users = JSON.parse(usersList)
    rimraf.sync('data/tmp/')

    for (let i = 0; i < users.length; i++) {

      const { name, email, password, biography, course, year } = users[i]

      resp = await User.userbyEmail(email)
      if (resp) {
        exit = 1
        res.status(500).jsonp({ status: "ERRO: Emails ja registados" })
        break;
      } else {
        let user = {
          name,
          email,
          password,
          biography,
          course,
          year,
        }
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash

            User.insert(user)
          })
        })
      }
    }
    if (exit != 1)
      res.status(200).jsonp({ status: "OK" })
  })

});

/* GET user info */
router.get('/:userId', verifyToken, function (req, res, next) {
  User.userbyId(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET user photo */
router.get('/:userId/photo', verifyToken, function (req, res, next) {

  if (fs.existsSync('data/users/' + req.params.userId + '/')) {

    fs.readdir(path.join(__dirname, '../data/users/' + req.params.userId, '/'), function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      var flag = false
      for (let i = 0; i < files.length; i++) {

        var name = path.parse(files[i]).name

        if (name == "photo") {
          res.status(200).sendFile(path.join(__dirname, '../data/users/' + req.params.userId, '/', files[i]))
          flag = true
          break
        }
      }
      if (flag == false)
        res.status(500).send("NO PHOTO")
    })
  } else {
    res.status(500).send("NO DIRECTORY")
  }
})

/* GET user friends */
router.get('/:userId/friends', verifyToken, function (req, res, next) {
  User.userFriends(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET user pending */
router.get('/:userId/pending', verifyToken, function (req, res, next) {
  User.userPending(req.params.userId)
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
router.get('/:userId/posts', verifyToken, function (req, res, next) {
  var userPosts = { _id: "", feed: [] }
  var aux
  User.fp(req.params.userId)
    .then(posts => {
      userPosts._id = posts._id
      for (var i = 0; i < posts.friends.length; i++) {
        userPosts.feed = userPosts.feed.concat(posts.friends[i].feed)

      }
      userPosts.feed = userPosts.feed.concat(posts.feed)
      userPosts.feed.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
      })

      res.jsonp(userPosts)
    })
    .catch(error => res.status(500).jsonp(error))
})


/* GET user groups feed */
router.get('/:userId/groups/feed', verifyToken, function (req, res, next) {
  Group.userGroupsFeed(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET user groups */
router.get('/:userId/groups', verifyToken, function (req, res, next) {
  Group.userGroups(req.params.userId)
    .then(data =>{console.log(data);res.jsonp(data)})
    .catch(error => res.status(500).jsonp(error))
})

/* GET user events */
router.get('/:userId/events', verifyToken, function (req, res, next) {
  User.userEvents(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET user chats */
router.get('/:userId/chats', verifyToken, function (req, res, next) {
  Chat.chatList(req.params.userId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})



/* PATCH user */
router.patch('/:idUser', verifyToken, function (req, res) {
  User.update(req.params.idUser, req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* POST photo */
router.post('/:userId/photo', verifyToken, function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No file was uploaded.');
  }

  if (!fs.existsSync('data/users/' + req.params.userId)) {
    fs.mkdirSync('data/users/' + req.params.userId, (err) => {
      if (err) throw err;
    })
  } else {
    fs.readdir(path.join(__dirname, '../data/users/' + req.params.userId, '/'), function (err, files) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      for (let i = 0; i < files.length; i++) {
        console.log(files[i])
        try {
          fs.unlinkSync(path.join(__dirname, '../data/users/' + req.params.userId, '/', files[i]))
        } catch(err) {
          console.error(err)
        }
      }
    })

  }

  const photo = req.files.file
  const ext = path.extname(photo.name)

  photo.mv('data/users/' + req.params.userId + '/photo' + ext, function (err) {
    if (err)
      return res.status(500).send(err);
    else
      return res.status(200).send("PHOTO UPLOADED")
  })
});

/* POST user event */
router.post('/:idUser/events', verifyToken, function (req, res) {
  Event.insert(req.body)
    .then(event => User.createEvent(req.params.idUser, event._id)
      .then(data =>{res.jsonp(event)})
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))

})

/* POST user friend request */
router.post('/:idUser/request', verifyToken, function (req, res) {
  User.request(req.params.idUser, req.body.idRequest)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


/* POST user accept friend request */
router.post('/:idUser/friends', verifyToken, function (req, res) {
  const members = {
    "members": [
      req.params.idUser,
      req.body.idRequest
    ]
  }
  User.friendAccept(req.params.idUser, req.body.idRequest)
    .then(data => User.friends(req.body.idRequest, req.params.idUser)
      .then(user => Chat.insert(members)
        .then(chat => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error)))
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE user */
router.delete('/:idUser', verifyToken, function (req, res) {
  User.remove(req.params.idUser)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE user friend request */
router.delete('/:idUser/request', verifyToken, function (req, res) {
  User.RemoveRequest(req.params.idUser, req.body.idRequest)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE user friend */
router.delete('/:idUser/friends', verifyToken, function (req, res) {
  User.friendDelete(req.params.idUser, req.body.idRequest)
    .then(data => User.friendDelete(req.body.idRequest, req.params.idUser)
      .then(user => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE user post */
router.delete('/:idUser/feed', verifyToken, function (req, res) {
  User.removePost(req.params.idUser, req.body.postId)
    .then(data => Post.remove(req.body.postId)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE user event */
router.delete('/:idUser/events', verifyToken, function (req, res) {
  User.removeEvent(req.params.idUser, req.body.eventId)
        .then(user => Event.remove(req.body.eventId)
          .then(data => res.jsonp(data))
          .catch(error => res.jsonp(error)))
        .catch(error => res.jsonp(error))
})


module.exports = router;
