const mongooseService = require('../services/mongooseService');
const GroupModel = require('../models/group').Group;

const getAllGroups = async (options = {}) => {
    await mongooseService.connect();

    return await mongooseService.findDocuments(GroupModel, {});
};

module.exports = {
    getAllGroups,
};
