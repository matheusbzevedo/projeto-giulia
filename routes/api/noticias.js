const express = require('express'),
    router = express.Router(),
    db = require('./../../database'),
    querySql = db.querySql,
    Promise = require('bluebird');

router.get('/ultimas', (request, response, next) => {
    Promise
    .resolve()
    .then(() => retrieveNotices())
    .then(noticias => response.status(200).json({noticias: noticias}))
    .catch(err => err instanceof Error ? response.status(400).send('General error') : response.status(200).json({err}));
});

function retrieveNotices() {
    return querySql(`
        SELECT
            *
        FROM
            noticias
        ORDER BY post_data DESC
        LIMIT 6
    `)
    .then(noticias => noticias.length == 0 ? Promise.reject('Não existem matérias cadastradas') : noticias);
}

router.get('/todas', (request, response, next) => {
    Promise
    .resolve()
    .then(() => retrieveAllNotices())
    .then(noticias => response.status(200).json({noticias}))
    .catch(err => err instanceof Error ? response.status(400).send('General error') :  response.status(200).json({err}));
});

function retrieveAllNotices(){
    return querySql(`
        SELECT 
            *
        FROM
            noticias
        ORDER BY post_data DESC
    `)
    .then(noticias => noticias.length == 0 ? Promise.reject('Não existem matérias cadastradas') : noticias);
}

module.exports = router;