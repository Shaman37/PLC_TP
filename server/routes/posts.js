var express = require('express');
var router = express.Router();
var Post = require('../controllers/posts')

const { verifyToken } = require('../middleware/check-auth')


/* GET post listing. */
router.get('/', verifyToken ,function (req, res, next) {
  if (req.query.category && req.query.author){
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
router.get('/:postId', verifyToken  , function (req, res, next) {
  Post.postbyId(req.params.postId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})


/* GET post author */
router.get('/:postId/author', verifyToken  , function (req, res, next) {
  Post.postAuthor(req.params.postId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET post comments */
router.get('/:postId/comments', verifyToken  ,function (req, res, next) {
  Post.postComments(req.params.postId)
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* POST posts */
router.post('/', verifyToken, function (req, res) {
  Post.insert(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

/* PATCH posts */
router.patch('/:idPost', function (req, res) {
  Post.update(req.params.idPost, req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

/* DELETE posts */
router.delete('/:idPost', function (req, res) {
  Post.remove(req.params.idPost)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router;
