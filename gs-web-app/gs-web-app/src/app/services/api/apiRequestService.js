import ApiRequestPaths from '../../consts/apiRequestPaths';
import apiService from './apiService';
import urlUtils from '../../utils/urlUtils';

const getAllUsers = () => {
    const requestUrl = urlUtils.getApiRequestUrl(ApiRequestPaths.GET_ALL_USERS);

    try {
        apiService.get(requestUrl)
            .then((response) => {
                console.log(response.data);
            });
    } catch (e) {
        console.error('[getAllUsers error]: ', e);
    }
};

const registerUser = (userData) => {
    const requestUrl = urlUtils.getApiRequestUrl(ApiRequestPaths.POST_USER_REGISTER);

    try {
        if (!userData) {
            throw new Error('\'[registerUser error]: invalid userData');
        }

        apiService.post(requestUrl, {data: userData})
            .then((response) => {
                console.log(response.data);
            });
    } catch (e) {
        console.error('[registerUser error]: ', e);
    }
};

export default {
    getAllUsers,
    registerUser
}
