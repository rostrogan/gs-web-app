import config from './config';

const getApiRequestUrl = (path) => {
    const {serverUrl} = config;

    if (typeof path === 'string') {
        return `${serverUrl}${path}`
    } else {
        console.error('[getApiRequestUrl error]: path is not a string.')
    }
};

export default {
    getApiRequestUrl,
}