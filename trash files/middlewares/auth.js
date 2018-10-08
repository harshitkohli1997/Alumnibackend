

exports.user = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('Login/createaccnt')
    }
};

exports.user = {
    hasAuthorization: (req, res, next) => {
        if (req.profile.id != req.user.id) {
            return res.redirect('/users'+req.profile.id);
        }
        next();
    }
};