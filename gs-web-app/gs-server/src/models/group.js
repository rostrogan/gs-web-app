const mongooseService = require('../services/mongooseService');
const schemas = require('../consts/schemas');

const Group = mongooseService.createModel('Group', schemas.GROUP_SCHEMA);

module.exports = {
    Group,
}
