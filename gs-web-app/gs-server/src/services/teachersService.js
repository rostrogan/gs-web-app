const mongooseService = require('../services/mongooseService');
const TeacherModel = require('../models/teacher').Teacher;
const {USER_ROLE_TEACHER} = require('../consts/userRoles');

const getAllTeachers = async () => {
    return await mongooseService.findDocuments(TeacherModel);
};

const registerTeacher = async (teacherData) => {
    await mongooseService.connect();

    const modifiedUserData = teacherData;
    modifiedUserData.role = USER_ROLE_TEACHER;

    const {email} = modifiedUserData;

    const teacher = new TeacherModel(modifiedUserData);

    const excitedTeacher = await mongooseService.findDocuments(TeacherModel, {email});

    if (excitedTeacher.length) {
        await mongooseService.disconnect();

        return {status: 0, message: 'This e-mail is already registered.'};
    }

    await mongooseService.createDocument(teacher);

    return {status: 1, message: 'User successfully registered.'};
};

module.exports = {
    getAllTeachers,
    registerTeacher,
}
