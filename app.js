require('dotenv').config();
const createerror = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieparser = require('cookie-parser'),
    logger = require('morgan'),
    sassmiddleware = require('node-sass-middleware'),
    compression = require('compression'),
    flash = require('connect-flash'),
    session = require('express-session'),
    webconfig = require('webconfig');

webconfig
    .compile({
        sources: [
            __dirname + '/web.config'
        ]
    });

const appRoutes = require('./routes'),
    apiRoutes = require('./routes/api');

const app = express();

// view engine setup
app
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')

.use(logger('dev'))
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use(compression())
.use(cookieparser())
.use(sassmiddleware({
    src: path.join(__dirname, 'public/styles/scss'),
    dest: path.join(__dirname, 'public/styles/css'),
    indentedsyntax: false, // true = .sass and false = .scss
    sourcemap: false,
    prefix: '/styles/css',
    outputstyle: 'compressed',
}))
.use(flash())

.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
.use(express.static(path.join(__dirname, 'public')))
.use(session({
    secret: 'secret123',
    resave: true,
    saveUninitialized: true
}));

appRoutes(app);
apiRoutes(app);

// catch 404 and forward to error handler
app
.use((req, res, next) => {
    next(createerror(404));
})

// error handler
.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500).render('error');
});

module.exports = app;