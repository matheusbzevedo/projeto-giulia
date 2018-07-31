const noticias = require('./noticias'),
    login = require('./login');

module.exports = (app) => {
    app
    .use('/api/noticias', noticias)
    .use('/api/login', login);
};