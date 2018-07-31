const home = require('./home'),
    adm = require('./adm'),
    login = require('./login');

module.exports = (app) => {
    app
    .use('/', home)
    .use('/adm', adm)
    .use('/login', login);
};