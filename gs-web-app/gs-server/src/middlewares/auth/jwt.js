const passportJWT = require('passport-jwt');

const config = require('../../utils/config');
const User = require('../../models/user');

const {JwtStrategy, ExtractJwt} = passportJWT;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
};

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then((user) => {
                    if (user) {
                        return done(null, user)
                    }
                    return done(null, false);
                })
                .catch((error) => {
                    return done(error, false, {message: 'Server Error'});
                });
        })
    );
};