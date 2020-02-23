const bcrypt = require('bcryptjs');

const generateSalt = (saltLength, password, next) => {
    bcrypt.genSalt(saltLength, (error, salt) => {
        if (error) {
            return next(error);
        }

        bcrypt.hash(password, salt, (hashError, hash) => {
            if (hashError) return next(hashError);

            return hash;
        });
    });
};

const compareSync = (schemaPassword, userPassword) => {
    return bcrypt.compareSync(schemaPassword, userPassword);
};

module.exports = {
    generateSalt,
    compareSync
};