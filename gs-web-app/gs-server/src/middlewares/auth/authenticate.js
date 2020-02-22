const passport = require('passport');

module.exports = (req, res, next) => {
    passport.authenticate('jwt', (error, user, info) => {
        if (err) return next(error);

        if (!user) return res.status(401).json({message: 'Unauthorized Access - No Token Provided!'});

        req.user = user;

        next();
    })(req, res, next);
};