import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

const makeSelectUserData = () => createSelector(
    selectUser,
    (userState) => userState.userData
);

const makeSelectorUserRole = () => createSelector(
  [makeSelectUserData],
  (userData) => userData.role
);



export {
    makeSelectUserData,
    makeSelectorUserRole
}
