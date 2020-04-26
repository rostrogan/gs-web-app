const mongooseService = require('../services/mongooseService');
const schemas = require('../consts/schemas');

const Teacher = mongooseService.createModel('Teacher', schemas.TEACHER_SCHEMA);

module.exports = {
    Teacher,
};
