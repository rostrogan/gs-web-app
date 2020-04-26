import {Routes} from '../consts/routePaths';
import routerService from './routerService';
import urlUtils from '../utils/urlUtils';

const forwardToGroupDetailPage = () => routerService.forwardTo();

export default {
    forwardToGroupDetailPage,
}
