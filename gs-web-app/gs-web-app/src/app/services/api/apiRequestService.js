import ApiRequestPaths from '../../consts/apiRequestPaths';
import apiService from './apiService';
import urlUtils from '../../utils/urlUtils';
import authService from '../authService';
import {dispatch} from '../../state/store';
import {setUserData} from '../../state/ducks/user/actions';
import {setGroupsData} from '../../state/ducks/global/actions';

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

const auth = (userData) => {
    const requestUrl = urlUtils.getApiRequestUrl(ApiRequestPaths.POST_USER_AUTH);

    try {
        apiService.post(requestUrl, {data: userData})
            .then((response) => {
                const {data} = response;

                authService.handleAuthRequest(data);
            });
    } catch (e) {
        console.error('[auth error]: ', e);
    }
};

const getUserDataById = (userId) => {
    const requestUrl = urlUtils.getApiRequestUrl(ApiRequestPaths.GET_USER_BY_ID);

    try {
        apiService.post(requestUrl, {data: {userId}})
            .then((response) => {
                const {data} = response;

                console.log(data);
                dispatch(setUserData(data));
            });
    } catch (e) {
        console.error('[auth error]: ', e);
    }
};

const getAllGroups = () => {
    const requestUrl = urlUtils.getApiRequestUrl(ApiRequestPaths.GET_ALL_GROUPS);

    console.log(requestUrl);

    try {
        apiService.get(requestUrl)
            .then((response) => {
                const {data} = response;

                console.log(data);

                dispatch(setGroupsData(data));
            });
    } catch (e) {
        console.error('[getAllUsers error]: ', e);
    }
};

export default {
    auth,
    getAllGroups,
    getAllUsers,
    getUserDataById,
    registerUser,
}
