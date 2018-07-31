const express = require('express'),
    router = express.Router(),
    db = require('./../../database'),
    querySql = db.querySql,
    Promise = require('bluebird'),
    jsonWebToken = require('jsonwebtoken');

router
.post('/auth', (request, response) => {
    Promise
    .resolve()
    .then(() => retrieveUser(request.body.email, request.body.senha))
    .then(user => {
        let token = jsonWebToken.sign({
            user: user.nome
        },
        'superSecretString',
        {expiresIn: 1440}
        );
        response.status(200).json({
            code: 1,
            user: user,
            token: token
        });
    })
    .catch(err => err instanceof Error ? response.status(400).send('General error') : response.status(200).json({code: 0, err}));
});

function retrieveUser(email, senha) {
    return querySql(`
    SELECT
    *
    FROM
    usuario
    WHERE
    usuario.email LIKE ? AND
    usuario.senha LIKE ?
    `, [email, senha])
    .then(usuario => usuario.length == 0 ? Promise.reject('Não existe usuário cadastrado') : usuario);
}

module.exports = router;