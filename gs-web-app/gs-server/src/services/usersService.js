const mongooseService = require('../services/mongooseService');
const UserModel = require('../models/user').User;
const userRoles = require('../consts/userRoles');

const getAllUsers = (options = {}) => mongooseService.findDocuments(UserModel, options);

const getApplicantUsers = () => getAllUsers({role: userRoles.USER_ROLE_APPLICANT});

const getEnrolleeUsers = () => getAllUsers({role: userRoles.USER_ROLE_ENROLLEE});

const getPostgradUsers = () => getAllUsers({role: userRoles.USER_ROLE_POSTGRAD});

const getUserById = async (userId) => {
    return await mongooseService.findOneDocument(UserModel, {_id: userId})
};

const registerUser = async (userData) => {
    await mongooseService.connect();

    const {email} = userData;

    const user = new UserModel(userData);

    const excitedUser = await mongooseService.findDocuments(UserModel, {email});

    if (excitedUser.length) {
        await mongooseService.disconnect();

        return {status: 0, message: 'This e-mail is already registered.'};
    }

    await mongooseService.createDocument(user);

    return {status: 1, message: 'User successfully registered.'};
};

const auth = async (userData) => {
    await mongooseService.connect();

    const {email: authRequestEmail, password: authRequestPassword} = userData;

    const user = new UserModel();

    const excitedUser = await mongooseService.findOneDocument(UserModel, {email: authRequestEmail});

    if (excitedUser) {
        const {email: excitedUserEmail, password: excitedUserPassword, _id: excitedUserId} = excitedUser || {};

        const isAuthSuccess = authRequestPassword === excitedUserPassword;

        if (isAuthSuccess) {
            return {status: 1, message: 'User authentication success.', uid: excitedUserId};
        } else {
            return {status: 0, message: 'User authentication failed.'};
        }
    } else {
        return {status: 0, message: 'This e-mail is not registered.'}
    }
};

module.exports = {
    auth,
    getAllUsers,
    getApplicantUsers,
    getEnrolleeUsers,
    getPostgradUsers,
    getUserById,
    registerUser,
};
