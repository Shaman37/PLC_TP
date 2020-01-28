var express = require('express');
var router = express.Router();

var Chat = require('../controllers/chats')
var Message = require('../controllers/messages')

const { verifyToken } = require('../middleware/check-auth')

/* GET specific chat */
router.get('/:chatId', function (req, res) {
    Chat.chatInfo(req.params.chatId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* POST chat */
router.post('/', function (req, res) {
    Chat.insert(req.body)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* GET chat messages */
router.get('/:chatId/messages', function (req, res) {
    Chat.chatMessages(req.params.chatId)
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error))
})

/* POST chat message */
router.post('/:chatId/messages', function (req, res) {
    Message.insert(req.body)
        .then(message => Chat.insertMessage(req.params.chatId, message._id)
            .then(chat => res.jsonp(chat))
            .catch(error => res.status(500).jsonp(error)))
        .catch(error => res.status(500).jsonp(error))
})

module.exports = router