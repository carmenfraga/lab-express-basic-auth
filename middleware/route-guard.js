const isLoggedIn = (req, res, next) => {
    console.log('---VAMOS A COMPROBAR LA SESIÓN---->', req.session)
    !req.session.currentUser ? res.render('login', { errorMessage: 'Desautorizado' }) : next()
}

const isLoggedOut = (req, res, next) => {
    req.session.currentUser ? res.redirect('/private') : next()
}


module.exports = { isLoggedIn, isLoggedOut }