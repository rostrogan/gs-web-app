import axios from 'axios';

const get = (url, requestConfig) => requestApi('get', url, requestConfig);
const post = (url, requestConfig = {}) => requestApi('post', url, requestConfig);
const requestDelete = (url, requestConfig = {}) => requestApi('delete', url, requestConfig);

const requestApi = async (method, url, requestConfig = {}) => {
    try {
        let config = {method: method, url: url};

        config = {...config, ...requestConfig};

        return await request(config);
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};

const request = (requestConfig) => axios.request(requestConfig);

export default {
    get,
    post,
    requestDelete,
};