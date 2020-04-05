import stringUtils from '../utils/stringUtils';

const sessionStorageKeys = {
    IS_USER_AUTHORIZED: stringUtils.getSessionStorageKey('iua'),
    AUTHORIZED_USER_ID: stringUtils.getSessionStorageKey('auid'),
};

export default sessionStorageKeys;
