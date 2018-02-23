import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from './logger';
import routes from './router';

dotenv.config();

var env =  process.env.NODE_ENV || 'development';



const app = express();

//app.use(require('morgan')('default', { 'stream': logger.stream}));

logger.debug('logging');

logger.info(process.env.LOG_LEVEL);
// view engine setup
app.set('view engine', 'pug');

app.locals.pretty = true;

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/static", express.static("public/css"));
app.use("/static", express.static("public/js"));
app.use("/static", express.static("public/img"));
app.use("/static", express.static("public/fonts"));
app.use("/static", express.static("public/ico"));
app.use("/static", express.static("public/locales"));;

app.use('/', routes);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
