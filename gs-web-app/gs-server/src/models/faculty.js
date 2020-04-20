const mongooseService = require('../services/mongooseService');
const schemas = require('../consts/schemas');

const Faculty = mongooseService.createModel('Faculty', schemas.FACULTY_SCHEMA);

module.exports = {
    Faculty,
}
