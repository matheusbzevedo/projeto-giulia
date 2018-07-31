const express = require('express'),
    router = express.Router(),
    flash = require('connect-flash'),
    axios = require('axios');

const url = 'http://192.168.0.35:3000/api/';
// const url = 'http://170.10.1.97:3000/api/';

router
.get('/', function(request, response, next) {
    response.status(200).render('login');
})

.get('/criar', (request, response, next) => {
    response.status(200).render('login');
})

.post('/auth', (request, response, next) => {
    axios({
        method: 'POST',
        url: url + 'login/auth',
        data: request.body
    })
    .then(results => {
        if(results.data.code == 0){
            response.redirect('/login');
        }else {
            response.redirect('/login');
        }
    })
    .catch(error => response.json(error));
});

module.exports = router;