const mongooseService = require('../services/mongooseService');
const schemas = require('../consts/schemas');

const User = mongooseService.createModel('User', schemas.USER_SCHEMA);

module.exports = {
    User
};