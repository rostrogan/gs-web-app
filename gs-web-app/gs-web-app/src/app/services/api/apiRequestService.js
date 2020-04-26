import ApiRequestPaths from '../../consts/apiRequestPaths';
import apiService from './apiService';
import urlUtils from '../../utils/urlUtils';
import authService from '../authService';
import {dispatch} from '../../state/store';
import {setUserData} from '../../state/ducks/user/actions';
import {setGroupsData, setFacultiesData} from '../../state/ducks/global/actions';

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
                console.log(response)
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

                dispatch(setUserData(data));
            });
    } catch (e) {
        console.error('[getUserDataById error]: ', e);
    }
};

const getAllGroups = () => {
    const requestUrl = urlUtils.getApiRequestUrl(ApiRequestPaths.GET_ALL_GROUPS);

    try {
        apiService.get(requestUrl)
            .then((response) => {
                const {data} = response;

                dispatch(setGroupsData(data));
            });
    } catch (e) {
        console.error('[getAllGroups error]: ', e);
    }
};

const getAllFaculties = () => {
    const requestUrl = urlUtils.getApiRequestUrl(ApiRequestPaths.GET_ALL_FACULTIES);

    try {
        apiService.get(requestUrl)
            .then((response) => {
                const {data} = response;

                dispatch(setFacultiesData(data));
            });
    } catch (e) {
        console.error('[getAllFaculties error]: ', e);
    }
};

const addNewGroup = (groupData) => {
    const requestUrl = urlUtils.getApiRequestUrl(ApiRequestPaths.POST_GROUPS_ADD);

    try {
        apiService.post(requestUrl, {data: {groupData}})
            .then((response) => {
                const {data} = response;

                console.log(data);
            });
    } catch (e) {
        console.error('[addNewGroup error]: ', e);
    }
};

export default {
    addNewGroup,
    auth,
    getAllFaculties,
    getAllGroups,
    getAllUsers,
    getUserDataById,
    registerUser,
}
