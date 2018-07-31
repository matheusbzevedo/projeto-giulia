const express = require('express'),
    router = express.Router(),
    axios = require('axios'),
    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const url = 'http://192.168.0.35:3000/api/';
// const url = 'http://170.10.1.97:3000/api/';

router
.get('/', (request, response, next) => {
    axios({
        method: 'GET',
        url: url + 'noticias/ultimas',
        responseType: 'json'
    })
    .then(noticias => {
        response.render('index', {
            title: 'Projeto Giulia | Mãos que falam',
            url: process.env.URL,
            noticias: noticias.data.noticias,
            month: months,
            day: days,
        });
    })
    .catch(error => response.json(error));
})

.get('/CDC', (request, response, next) => {
    response.status(200).render('cdc', {title: 'Projeto Giulia | Código de Defesa do Consumidor'});
})

.get('/noticias', (request, response, next) => {
    axios({
        method: 'GET',
        url: url + 'noticias/todas',
        responseType: 'json'
    })
    .then(noticias => {
        response.render('noticias', {
            title: 'Projeto Giulia | Notícias',
            url: process.env.URL,
            noticias: noticias.data.noticias
        });
    })
    .catch(error => response.json(error));
});

module.exports = router;