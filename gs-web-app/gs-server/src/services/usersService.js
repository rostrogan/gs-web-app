const mongooseService = require('../services/mongooseService');
const UserModel = require('../models/user').User;
const userRoles = require('../consts/userRoles');

const getAllUsers = (options = {}) => mongooseService.findDocuments(UserModel, options);

const getApplicantUsers = () => getAllUsers({role: userRoles.USER_ROLE_APPLICANT});

const getEnrolleeUsers = () => getAllUsers({role: userRoles.USER_ROLE_ENROLLEE});

const getPostgradUsers = () => getAllUsers({role: userRoles.USER_ROLE_POSTGRAD});

const registerUser = async (userData) => {
    mongooseService.connect();

    const {email} = userData;

    const user = new UserModel(userData);

    const excitedUser = await mongooseService.findDocuments(UserModel, {email});

    if (excitedUser.length) {
        await mongooseService.disconnect();

        return {status: 0, message: 'This e-mail is already registered.'};
    }

    await mongooseService.createDocument(user);
    await mongooseService.disconnect();

    return {status: 1, message: 'User successfully registered.'};

};

module.exports = {
    getAllUsers,
    getApplicantUsers,
    getEnrolleeUsers,
    getPostgradUsers,
    registerUser,
};
