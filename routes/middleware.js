module.exports = {
    isAuthenticated: (request, response, next) => {
        if (request.session.token)
            return next();
        response.redirect('/');
    }
};