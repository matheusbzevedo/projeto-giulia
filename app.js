const createerror = require('http-errors');
const express = require('express');
const path = require('path');
const cookieparser = require('cookie-parser');
const logger = require('morgan');
const sassmiddleware = require('node-sass-middleware');
const compression = require('compression');

const indexrouter = require('./routes/index');
const usersrouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieparser());
app.use(sassmiddleware({
    src: path.join(__dirname, 'public/styles/scss'),
    dest: path.join(__dirname, 'public/styles/css'),
    indentedsyntax: false, // true = .sass and false = .scss
    sourcemap: false,
    outputstyle: 'compressed',
    prefix: '/styles/css',
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', ['*']);
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/', indexrouter);
app.use('/users', usersrouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createerror(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;