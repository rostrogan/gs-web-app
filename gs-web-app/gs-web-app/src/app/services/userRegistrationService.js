import apiRequestService from './api/apiRequestService';
import { USER_ROLE_STUDENT} from '../consts/userRoles';

const registerStudent = (userData) => {
    const newUserData = {...userData};

    newUserData.role = USER_ROLE_STUDENT;
    newUserData.create_date = new Date();

    apiRequestService.registerUser(newUserData);
};

export default {
    registerStudent,
}
