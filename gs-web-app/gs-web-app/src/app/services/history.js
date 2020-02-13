import {createBrowserHistory} from 'history'

export default createBrowserHistory({
    basename: process.env.REAC_APP_BASENAME
});