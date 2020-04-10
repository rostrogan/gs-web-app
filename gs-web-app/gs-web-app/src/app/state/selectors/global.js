import {createSelector} from 'reselect';

const selectUser = (state) => state.global;

const makeSelectGroupsData = () => createSelector(
    selectUser,
    (globalState) => globalState.groups
);

export {
    makeSelectGroupsData,
}
