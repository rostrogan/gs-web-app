const mongooseService = require('../services/mongooseService');
const UserModel = require('../models/user').User;
const TeacherModel = require('../models/teacher').Teacher;
const {USER_ROLE_STUDENT} = require('../consts/userRoles');

const getAllUsers = (options = {}) => mongooseService.findDocuments(UserModel, options);

const getUserById = async (userId) => {
    return await mongooseService.findOneDocument(UserModel, {_id: userId})
    || mongooseService.findOneDocument(TeacherModel, {_id: userId})
};

const registerUser = async (userData) => {
    await mongooseService.connect();

    const modifiedUserData = userData;
    modifiedUserData.role = USER_ROLE_STUDENT;

    const {email} = modifiedUserData;

    const user = new UserModel(modifiedUserData);

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

    const excitedUser =
        await mongooseService.findOneDocument(UserModel, {email: authRequestEmail})
        || await mongooseService.findOneDocument(TeacherModel, {email: authRequestEmail});

    if (excitedUser) {
        const {password: excitedUserPassword, _id: excitedUserId} = excitedUser || {};

        const isAuthSuccess = authRequestPassword === excitedUserPassword;

        if (isAuthSuccess) {
            return {status: 1, message: 'Авторизація успішна.', uid: excitedUserId};
        } else {
            return {status: 0, message: 'Введені дані не вірні.'};
        }
    } else {
        return {status: 0, message: 'Користувача з такими даними не знайдено.'}
    }
};

module.exports = {
    auth,
    getAllUsers,
    getUserById,
    registerUser,
};
