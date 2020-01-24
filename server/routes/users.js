var express = require('express');
var router = express.Router();
var User = require('../controllers/users')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
var mongoose = require('mongoose')

const { verifyToken } = require('../middleware/check-auth')

const privateKey = fs.readFileSync('./keys/private.key', 'utf8')


/* GET users listing. */
router.get('/', function (req, res, next) {
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


// Post Login
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


// Post Register
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
						user._id = mongoose.Types.ObjectId()
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
	console.log(req)
	User.userbyId(req.params.userId)
		.then(data => res.jsonp(data))
		.catch(error => res.status(500).jsonp(error))
})

module.exports = router;