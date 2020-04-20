const mongooseService = require('../services/mongooseService');
const {Faculty} = require('../models/faculty');

const getAllFaculties = async () => {
    await mongooseService.connect();

    return await mongooseService.findDocuments(Faculty, {});
};

module.exports = {
    getAllFaculties,
}

