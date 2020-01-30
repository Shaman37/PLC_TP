var express = require('express');
var router = express.Router();
var Post = require('../controllers/posts')
var User = require('../controllers/users')
var fs = require('fs')
var path = require('path')

const { verifyToken } = require('../middleware/check-auth')

/* GET post listing. */
router.get('/', function (req, res, next) {
  if (req.query.category && req.query.author) {
    Post.listbyAuthorCat(req.query.author, req.query.category)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if (req.query.category) {
    Post.listbyCategory(req.query.category)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else if (req.query.author) {
    Post.listbyAuthor(req.query.author)
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
  else {
    Post.list()
      .then(data => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
})



/* GET post info */
router.get('/:postId', verifyToken, function (req, res, next) {
  Post.postbyId(req.params.postId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


/* GET post author */
router.get('/:postId/author', verifyToken, function (req, res, next) {
  Post.postAuthor(req.params.postId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET post comments */
router.get('/:postId/comments', verifyToken, function (req, res, next) {
  Post.postComments(req.params.postId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET all fileNames */
router.get('/:postId/files/', function (req, res, next) {
  Post.getFiles(req.params.postId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET specific file */
router.get('/:postId/files/:fileName', function (req, res, next) {
  fs.readFile('data/' + req.params.postId + '/' + req.params.fileName, (err, data) => {
    if (err) 
      return res.status(500).send(err)
    res.status(200).sendFile(path.join(__dirname, '../data/' + req.params.postId, req.params.fileName))
  })
})

/* POST posts */
router.post('/', function (req, res) {
  Post.insert(req.body)
    .then(data => User.addToFeed(data.author, data._id)
      .then(user =>{
        var aux = {author: {name: "", _id: ""}, text: "", date: ""}
        aux.author.name = user.name
        aux.text = data.text
        aux.date = data.date
        //console.log("AUX" + data.toObject())
        res.jsonp(aux)
      }) 
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})



/* POST files*/
router.post('/:postId/files', function (req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  if (!fs.existsSync('data/' + req.params.postId))
    fs.mkdirSync('data/' + req.params.postId, (err) => {
      if (err) throw err;
    })

  let arrayFiles = []

  Object.keys(req.files).forEach(function (key) {

    let file = req.files[key]
    arrayFiles.push(file.name)
    console.log(arrayFiles)

    file.mv('data/' + req.params.postId + '/' + file.name, function (err) {
      if (err)
        return res.status(500).send(err);
    })
  })

  Post.insertFile(req.params.postId, arrayFiles)
    .then(post => res.jsonp(post))
    .catch(error => res.status(500).jsonp(error))
});

/* POST post comment */
router.post('/:postId/comments', function (req, res) {
  Post.insert(req.body)
    .then(data => Post.addComment(req.params.postId, data._id)
      .then(user => res.jsonp(data))
      .catch(error => res.status(500).jsonp(error)))
    .catch(error => res.status(500).jsonp(error))
})



/* PATCH posts */
router.patch('/:idPost', function (req, res) {
  Post.update(req.params.idPost, req.body)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* DELETE posts */
router.delete('/:idPost', function (req, res) {
  Post.remove(req.params.idPost)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


module.exports = router;
