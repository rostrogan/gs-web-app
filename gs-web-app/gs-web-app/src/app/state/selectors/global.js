import {createSelector} from 'reselect';

const selectUser = (state) => state.global;

const makeSelectGroupsData = () => createSelector(
    selectUser,
    (globalState) => globalState.groups
);

const makeSelectFacultiesData = () => createSelector(
    selectUser,
    (globalState) => globalState.faculties
);

export {
    makeSelectFacultiesData,
    makeSelectGroupsData,
}
