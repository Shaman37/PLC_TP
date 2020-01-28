const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const fileUpload = require('express-fileupload');

const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const eventsRouter = require('./routes/events');
const groupsRouter = require('./routes/groups');
const ucsRouter = require('./routes/ucs');

var mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/Students', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo ready: ' + mongoose.connection.readyState))
  .catch((error) => console.log('Mongo: connection error' + error))



const app = express();

app.use(fileUpload());
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/ucs', ucsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
