$('#btn-send').click((e) => {
    console.log('top');
    e.preventDefault();
    $('#contato-mensagem').toggleClass('scale-out');
    $('.contato-form').toggleClass('scale-out hide');
});