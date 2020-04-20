const mongooseService = require('../services/mongooseService');
const GroupModel = require('../models/group').Group;

const getAllGroups = async (options = {}) => {
    await mongooseService.connect();

    console.log(await mongooseService.findDocuments(GroupModel, {}));

    return await mongooseService.findDocuments(GroupModel, {});
};

const addNewGroup = async (groupData) => {
    await mongooseService.connect();

    const group = new GroupModel(groupData);

    await mongooseService.createDocument(group);
};

module.exports = {
    addNewGroup,
    getAllGroups,
};
