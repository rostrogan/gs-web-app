const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const bcryptService = require('../services/auth/bcryptService');
const config = require('../utils/config');
const mongooseService = require('../services/mongooseService');
const schemas = require('../consts/schemas');
const Token = require('../models/token');
const {USER_SCHEMA: UserSchema} = require('../consts/schemas');

const DATE_TO_ADD = 60;
const HOUR_IN_MILLISECONDS = 60 * 60 * 1000;
const {jwtSecret} = config;

UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (error, salt) => {
        if (error) {
            return next(error);
        }

        bcrypt.hash(user.password, salt, (hashError, hash) => {
            if (hashError) return next(hashError);

            user.password = hash;

            next();
        });
    });
});

UserSchema.methods.comparePassword = function (password) {
    bcryptService.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);

    expirationDate.setDate(today.getDate() + DATE_TO_ADD);

    const payload = {
        id: this._id,
        email: this.email,
        name: this.name,
        surname: this.surname
    };

    return jwt.sign(payload, jwtSecret, {
        expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
    });
};

UserSchema.methods.generatePasswordReset = function () {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + HOUR_IN_MILLISECONDS;
};

UserSchema.methods.generateVerificationToken = function () {
    let payload = {
        userId: this._id,
        token: crypto.randomBytes(20).toString('hex')
    };

    console.log('generateVerificationToken', new Token(payload));

    return new Token(payload);
};

const User = mongooseService.createModel('User', UserSchema);

module.exports = User;