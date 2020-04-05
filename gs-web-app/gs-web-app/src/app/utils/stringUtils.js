const APPLICATION_PREFIX = 'gswebapp';

const getSessionStorageKey = (keyBody) => `${APPLICATION_PREFIX}${keyBody}`;

export default {
    getSessionStorageKey,
}
