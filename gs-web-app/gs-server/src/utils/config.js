const Config = require('../config');

const config = {
    databaseUrl: Config.DatabaseUrl,
    corsWhitelist: Config.CorsWhitelist,
};

module.exports = config;
