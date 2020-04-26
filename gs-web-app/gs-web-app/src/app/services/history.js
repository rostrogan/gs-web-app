import {createBrowserHistory} from 'history'

let history;

const getHistory = () => {
    if (!history) {
        history = createBrowserHistory({
            basename: process.env.REAC_APP_BASENAME
        });
    }

    return history
};

export default {
    getHistory,
};
