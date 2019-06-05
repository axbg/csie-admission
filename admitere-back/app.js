const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const sequelize = require('./models/index').sequelize;
const indexRouter = require('./routes/index');
const COOKIE_SESSION_SECRET = require('./config/constants').COOKIE_SESSION_SECRET;

const app = express();

// sequelize.sync({force: true});

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(expressSession(({ secret: COOKIE_SESSION_SECRET, cookie: { httpOnly: true, secure: true, maxAge: 86400000 } })));
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error')
});

module.exports = app;