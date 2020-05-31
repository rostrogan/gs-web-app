import urlJoin from 'url-join';

import config from './config';

const getApiRequestUrl = (path) => {
    const {serverUrl} = config;

    if (typeof path === 'string') {
        return `${serverUrl}${path}`
    } else {
        console.error('[getApiRequestUrl error]: path is not a string.')
    }
};

const join = (...params) => urlJoin(params);

export default {
    getApiRequestUrl,
    join,
}
