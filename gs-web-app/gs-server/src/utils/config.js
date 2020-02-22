const Config = require('../config');

const config = {
    databaseUrl: Config.databaseUrl,
    jwtSecret: Config.JWT_Secret,
    sendgridApiKey: Config.SendgridApiKey,
    emailFromAddress: Config.EmailFromAddress
};

module.exports = config;
