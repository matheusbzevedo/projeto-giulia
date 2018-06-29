const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('index', { title: 'Projeto Giulia | Mãos que falam' });
});

module.exports = router;