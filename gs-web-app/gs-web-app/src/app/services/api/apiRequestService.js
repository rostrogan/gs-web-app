import * as apiRequestPaths from '../../consts/apiRequestPaths';
import apiService from './apiService';
import urlUtils from '../../utils/urlUtils';

const getAllUsers = () => {
    const requestUrl = urlUtils.getApiRequestUrl(apiRequestPaths.API_ALL_USERS);

    try {
        apiService.get(requestUrl)
            .then((response) => {
                console.log(response.data);
            });
    } catch (e) {
        console.error('[getAllUsers error]: ', e);
    }
};

export default {
    getAllUsers
}