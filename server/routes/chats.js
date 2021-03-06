var express = require('express');
var router = express.Router();

var Chat = require('../controllers/chats')
var Message = require('../controllers/messages')

const { verifyToken } = require('../middleware/check-auth')

/* GET specific chat */
router.get('/', verifyToken, function (req, res) {
    Chat.list()
    .then(data => res.jsonp(data))
    .catch(error => res.status(500).jsonp(error))
})

/* GET specific chat */
router.get('/:chatId', verifyToken, function (req, res) {
    Chat.chatInfo(req.params.chatId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* POST chat */
router.post('/', verifyToken, function (req, res) {
    Chat.insert(req.body)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* GET chat messages */
router.get('/:chatId/messages', verifyToken, function (req, res) {
    Chat.chatMessages(req.params.chatId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* POST chat message */
router.post('/:chatId/messages', verifyToken, function (req, res) {
    Message.insert(req.body)
        .then(message => Chat.insertMessage(req.params.chatId, message._id)
            .then(chat => {console.log(chat);res.jsonp(chat)})
            .catch(error => res.status(500).jsonp(error)))
        .catch(error => res.status(500).jsonp(error))
})

/* POST chat member */
router.post('/:chatId/member', verifyToken, function (req, res) {
    Chat.insertMember(req.params.chatId,req.body.userId)
        .then(chat => res.jsonp(chat))
        .catch(error => res.status(500).jsonp(error))
})

module.exports = router