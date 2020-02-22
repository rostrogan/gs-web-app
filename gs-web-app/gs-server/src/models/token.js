const mongooseService = require('../services/mongooseService');
const schemas = require('../consts/schemas');

const Token = mongooseService.createModel('Tokens', schemas.TOKEN_SCHEMA);

module.exports = Token;