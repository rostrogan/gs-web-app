import {createSelector} from 'reselect';

const selectUser = (state) => state.user;

const makeSelectUserData = () => createSelector(
    selectUser,
    (userState) => userState.userData
);

export {
    makeSelectUserData,
}
