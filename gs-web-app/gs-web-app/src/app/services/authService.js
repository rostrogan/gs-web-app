import apiResponseStatuses from '../consts/apiResponseStatuses';
import sessionService from './sessionService';
import sessionStorageKeys from '../consts/sessionStorageKeys';
import apiRequestService from './api/apiRequestService';
import {dispatch} from '../state/store';
import {clearUserData} from '../state/ducks/user/actions';

const handleAuthRequest = (response) => {
    const {status, uid} = response || {};

    if (status === apiResponseStatuses.SUCCESS) {
        sessionService.createItem(sessionStorageKeys.AUTHORIZED_USER_ID, uid);

        apiRequestService.getUserDataById(uid);
    }
};

const checkAuthorizedUserAvailability = () => sessionService.getItemValue(sessionStorageKeys.AUTHORIZED_USER_ID);

const logout = () => {
    const loggedUserId = sessionService.getItemValue(sessionStorageKeys.AUTHORIZED_USER_ID);

    if (loggedUserId) {
        sessionService.clearItem(sessionStorageKeys.AUTHORIZED_USER_ID);
        dispatch(clearUserData());
    }
};

export default {
    handleAuthRequest,
    checkAuthorizedUserAvailability,
    logout
}
