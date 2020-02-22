const mongooseService = require('../services/mongooseService');
const UserModel = require('../models/user').User;
const userRoles = require('../consts/userRoles');

const getAllUsers = (options = {}) => mongooseService.findDocuments(UserModel, options);

const getApplicantUsers = () => getAllUsers({role: userRoles.USER_ROLE_APPLICANT});

const getEnrolleeUsers = () => getAllUsers({role: userRoles.USER_ROLE_ENROLLEE});

const getPostgradUsers = () => getAllUsers({role: userRoles.USER_ROLE_POSTGRAD});

module.exports = {
    getAllUsers,
    getApplicantUsers,
    getEnrolleeUsers,
    getPostgradUsers,
};