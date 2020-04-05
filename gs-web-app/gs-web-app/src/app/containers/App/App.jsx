import authService from '../../services/authService';
import apiRequestService from '../../services/api/apiRequestService';

const App = (props) => {
    const { children } = props;

    const authorizedUserId = authService.checkAuthorizedUserAvailability();

    if (authorizedUserId) {
        apiRequestService.getUserDataById(authorizedUserId);
    }

    return children;
};

export default App;
