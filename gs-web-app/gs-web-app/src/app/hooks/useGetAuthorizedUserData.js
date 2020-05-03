import {useEffect} from 'react';

import apiRequestService from '../services/api/apiRequestService';
import authService from '../services/authService';
import {getState} from '../state/store';
import {makeSelectUserData} from '../state/selectors/user';

const useGetAuthorizedUserData = () => {
  const authorizedUserId = authService.checkAuthorizedUserAvailability();
  const userData = makeSelectUserData()(getState());

  useEffect(() => {
    if (authorizedUserId && userData === null) {
      apiRequestService.getUserDataById(authorizedUserId);
    }
  });
};

export default useGetAuthorizedUserData;
